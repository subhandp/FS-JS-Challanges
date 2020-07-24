// npm install papaparse
const csv = require('papaparse') // pakai library parser PapaParse untuk parse CSV
const fs = require('fs') //library membaca file
const { promises } = require('fs') //library membaca file
const file = fs.createReadStream('product-price.csv'); // load file dengan filestream

csv.parse(file, {
    download: true,
    header: true,
    complete: function(results) { //parse selesai

        results.data.sort(function(a, b) { //memakai fungsi prototype javascript sort untuk sorting
            if (Number.parseInt(a.PRICE) > Number.parseInt(b.PRICE)) return 1
            if (Number.parseInt(a.PRICE) < Number.parseInt(b.PRICE)) return -1
            return 0;
        }).map((product) => { //merubah currency rupiah
            product.PRICE = 'Rp. ' + Number.parseInt(product.PRICE).toLocaleString('id');
        });

        console.log("Versi Papaparse CSV: ", results.data);
    }
});