//Scraping Dynamic Content (AJAX, Javascript)

const puppeteer = require('puppeteer');

(async () => {
  // Step 1: Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Step 2: Navigate to a page with dynamic content
  await page.goto('https://example.com/dynamic-content'); // Replace with the URL of a page with dynamic content
  
  // Step 3: Wait for the content to load dynamically (AJAX)
  await page.waitForSelector('.dynamic-content'); // Replace with the selector of the dynamically loaded content
  
  // Step 4: Scrape the dynamically loaded content
  const data = await page.evaluate(() => {
    const content = document.querySelector('.dynamic-content').innerText; // Replace with actual content selector
    return content;
  });

  console.log(data); // Output the scraped content
  
  // Step 5: Close the browser
  await browser.close();
})();
