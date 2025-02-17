const puppeteer = require('puppeteer');
(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.fresources.com');
  const title = await page.title();
  console.log("title of the page:", title);
  await browser.close();
})();