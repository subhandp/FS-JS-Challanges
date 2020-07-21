// const csv = require('papaparse')
// const fs = require('fs')
// const file = fs.createReadStream('product-price.csv');
// var productAndPrice;
// csv.parse(file, {
//     download: true,
//     header: true,
//     complete: function(results, file) {
//         productAndPrice = results.data;

//     }
// });

// console.log(productAndPrice);

//npm install csv-parser
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
let resultSort;

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

formatter.format(2500); /* $2,500.00 */


fs.createReadStream('product-price.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {

        for (const key in results) {
            if (object.hasOwnProperty(key)) {
                results
                const element = object[key];
                results
            }
        }

    });
console.log(results);