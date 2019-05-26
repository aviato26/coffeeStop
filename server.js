const req = require('request');
const scrap = require('cheerio');
let fs = require('fs');
let list;

req('https://www.starbucks.com/menu/drinks/frappuccino-blended-beverages', (err, res, body) => {
  let parse = scrap.load(body);
  list = parse('ol li span');
  console.log(list)
})
