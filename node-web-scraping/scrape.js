//How to scrape a webpage in node.js

const request = require('request');
const cheerio = require('cheerio');

// Send a GET request to the webpage you want to scrape
request('https://abdoulaye.pro', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Find the element(s) you want to scrape using Cheerio selectors
    const title = $('title').text();
    const heading = $('h1').text();
    const paragraphs = $('p').map((i, el) => $(el).text()).get();

    // Print the scraped data
    console.log('Title:', title);
    console.log('Heading:', heading);
    console.log('Paragraphs:', paragraphs);
  }
});