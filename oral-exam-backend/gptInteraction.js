// Example of making an API request
async function makeAPIRequest() {
    await handleRateLimit();
  
    // Your API request code here
    const apiKey = process.env.OPENAI_API_KEY;
    const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  
    const prompt = "What is the capital of France?";
  
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 50
      })
    });
  
    const data = await response.json();
    console.log("GPT-3.5's response:", data.choices[0].text.trim());
  }
  
  // Example usage
  makeAPIRequest();
  