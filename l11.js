const puppeteer = require('puppeteer');
const fs = require('fs');
const {parse} = require('json2csv');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://books.toscrape.com/');

  await page.waitForSelector('.product_pod');

  const products = await page.evaluate(() => {
    const productElements = document.querySelectorAll('.product_pod');
    const productList = [];

    productElements.forEach(product => {
      const name = product.querySelector('h3 a') ? product.querySelector('h3 a').title : '';
      const price = product.querySelector('.price_color') ? product.querySelector('.price_color').innerText : '';
      const url = product.querySelector('h3 a') ? product.querySelector('h3 a').href : '';

      productList.push({ name, price, url});
    });
    return productList;
  });
  const csv = parse(products);
  fs.writeFileSync('books.csv', csv);
  console.log('Data saved to books.csv');
  await browser.close();

})();