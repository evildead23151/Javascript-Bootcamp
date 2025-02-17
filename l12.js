//Handling Authentication

const puppeteer = require('puppeteer');

(async () => {
  // Step 1: Launch Puppeteer
  const browser = await puppeteer.launch({ headless: false }); // Set to false to see the login process
  const page = await browser.newPage();
  
  // Step 2: Navigate to the login page
  await page.goto('https://example.com/login'); // Replace with actual login page URL
  
  // Step 3: Fill in the login credentials
  await page.type('#username', 'your-username'); // Replace with the correct selector and username
  await page.type('#password', 'your-password'); // Replace with the correct selector and password
  
  // Step 4: Submit the login form
  await page.click('#login-button'); // Replace with the login button's actual selector
  
  // Step 5: Wait for the page to load after logging in
  await page.waitForNavigation();
  
  // Step 6: Scrape data after login
  const userData = await page.evaluate(() => {
    const userName = document.querySelector('.user-name').innerText; // Replace with actual user data selector
    const accountBalance = document.querySelector('.account-balance').innerText; // Replace with actual balance selector
    return { userName, accountBalance };
  });

  console.log(userData); // Output the scraped data
  
  // Step 7: Close the browser
  await browser.close();
})();
