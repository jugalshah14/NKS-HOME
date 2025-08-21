import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    // Validate required fields
    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Extract UTM parameters and other tracking data from the request
    const url = new URL(request?.url);
    const fullLpUrl = request?.headers?.get('referer') || '';
    
    // Extract only the base URL (before ?) for lp_url
    const lpUrl = fullLpUrl.split('?')[0] || '';
    
    // Extract UTM parameters from the referer URL (original page URL)
    let utmSource = '';
    let utmMedium = '';
    let utmCampaign = '';
    let utmContent = '';
    let utmTerm = '';
    let gclid = '';
    
    if (fullLpUrl) {
      try {
        const refererUrl = new URL(fullLpUrl);
        utmSource = refererUrl?.searchParams?.get('utm_source') || '';
        utmMedium = refererUrl?.searchParams?.get('utm_medium') || '';
        utmCampaign = refererUrl?.searchParams?.get('cstm_ppc_campaign') || '';
        utmContent = '';
        utmTerm = refererUrl?.searchParams?.get('cstm_ppc_keyword') || '';
        gclid = refererUrl?.searchParams?.get('gclid') || '';
      } catch (error) {
        // Silent error handling
      }
    }

    // Prepare the request data based on form type
    let requestData;
    
    if (formType === 'contact') {
      // Contact form from Footer.jsx
      requestData = {
        Leads: [
          {
            FName: formData?.name || '',
            LName: formData?.name || '',
            Phone: formData?.phoneNumber || '',
            City: "Kolkata",
            Project: "NEW KOLKATA - SANGAM",
            Email: formData?.email || '',
            Campaign: utmCampaign || "",
            Source: utmSource,
            Medium: utmMedium,
            Content: utmContent,
            Term: formData?.requirements || '',
            Sub_Source: "LP New-Google Ads AB Testing-RL",
            gclid: gclid,
            lp_url: lpUrl,
            form_id: "contact_us_form",
            message: formData?.requirements || "",
            choice: formData?.bhk || "",
            budget: formData?.budget || "",
          },
        ],
      };
    } else if (formType === 'schedule-visit') {
      // Schedule visit form from ScheduleVisitModal.jsx
      requestData = {
        Leads: [
          {
            FName: formData?.name || '',
            LName: formData?.name || '',
            Phone: formData?.phone || '',
            City: "Kolkata",
            Project: "NEW KOLKATA - SANGAM",
            Email: formData?.email || '',
            Campaign: utmCampaign || "",
            Source: utmSource,
            Medium: utmMedium,
            Content: utmContent,
            Term: utmTerm,
            Sub_Source: "LP New-Google Ads AB Testing-RL",
            gclid: gclid,
            lp_url: lpUrl,
            form_id: "schedule_visit_form",
            message: formData?.message || "",
            choice: formData?.bhk || "",
            budget: formData?.budget || "",
          },
        ],
      };
         } else {
       return NextResponse.json(
         { error: 'Invalid form type' },
         { status: 400 }
       );
     }

     const response = await fetch(
       "https://alcoverealty.my.salesforce-sites.com/websitehook/services/apexrest/hookinlandingPage",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(requestData),
       }
     );

     if (!response.ok) {
       // Handle error silently
     } else {
       const result = await response.json();
     }

    // Always return success to user, regardless of Salesforce API result
    return NextResponse.json(
      { 
        success: true, 
        message: formType === 'contact' 
          ? "Thank you! Your message has been sent successfully."
          : "Thank you! Your site visit request has been submitted successfully.",
        data: { message: "Form submitted successfully" }
      },
      { status: 200 }
    );

     } catch (error) {
     // Even if there's an error, return success to user
     return NextResponse.json(
       { 
         success: true, 
         message: formType === 'contact' 
           ? "Thank you! Your message has been sent successfully."
           : "Thank you! Your site visit request has been submitted successfully.",
         data: { message: "Form submitted successfully" }
       },
       { status: 200 }
     );
   }
}
