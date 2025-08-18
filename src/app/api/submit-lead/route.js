import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the data for Salesforce
    const requestData = {
      Leads: [
        {
          FName: body.name,
          LName: body.name,
          Phone: body.phone,
          City: "Kolkata",
          project: "NEW KOLKATA - SANGAM",
          Email: body.email,
          Campaign: "G_Generic_WB_08-Feb-2023",
          Source: "google",
          Medium: "s",
          Content: "",
          Choice__c: body.bhk || '',
          gcBudget__c: body.budget || '',
          Term: `BHK: ${body.bhk || 'Not specified'}, Budget: ${body.budget || 'Not specified'}${body.message ? `, Message: ${body.message}` : ''}`,
        },
      ],
    };

    // Make the API call to Salesforce with timeout
    const salesforceUrl = process.env.SALESFORCE_API_URL || "https://alcoverealty.my.salesforce-sites.com/websitehook/services/apexrest/hookinlandingPage";
    
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    try {
      const response = await fetch(salesforceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Salesforce API error: ${response.status}`);
      }

      const result = await response.json();

      // Return success response
      return NextResponse.json(
        { success: true, message: 'Lead submitted successfully', data: result },
        { status: 200 }
      );

    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Request timeout - Salesforce API is taking too long to respond');
      }
      
      throw fetchError;
    }

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit lead. Please try again later.' },
      { status: 500 }
    );
  }
}
