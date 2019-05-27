const req = require('request');
const scrap = require('cheerio');
let fs = require('fs');
let list;
let splitList;

req('https://www.coffeebean.com/cafe-menu/item/ice-blended', (err, res, body) => {
  let parse = scrap.load(body);
  list = parse('#edit-field-flavors-target-id option');
  splitList = list.text()
  console.log(splitList.split(' '))
})
