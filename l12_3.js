// CAPTCHA BY-PASSING

const puppeteer = require('puppeteer');

(async () => {
  // Step 1: Launch Puppeteer with a custom user-agent to avoid detection
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Step 2: Set a custom user-agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  // Step 3: Navigate to the page
  await page.goto('https://example.com/captcha');
  
  // Step 4: Scrape or interact with the page (CAPTCHA may show up)
  
  // Step 5: Close the browser
  await browser.close();
})();
