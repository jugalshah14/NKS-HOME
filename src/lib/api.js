/**
 * Utility functions for API calls
 */

/**
 * Submit lead form data
 * @param {Object} formData - Form data object
 * @returns {Promise<Object>} API response
 */
export async function submitLead(formData) {
  try {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout for client
    
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit lead');
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('API call failed:', error);
    
    if (error.name === 'AbortError') {
      return { success: false, error: 'Request timeout - please try again' };
    }
    
    return { success: false, error: error.message };
  }
}
