// npm install papaparse
const csv = require('papaparse') // pakai library parser PapaParse untuk parse CSV
const fs = require('fs') //library membaca file
const file = fs.createReadStream('product-price.csv'); // load file dengan filestream

csv.parse(file, {
    download: true,
    header: true,
    complete: function(results, file) {
        let resultProduct = results.data;

        resultProduct.sort(function(a, b) { //memakai fungsi prototype javascript sort untuk sorting
            var priceA = Number.parseInt(a['PRICE']); //ubah dulu ke integer
            var priceB = Number.parseInt(b['PRICE']);

            //sorting dari harga termurah
            if (priceA > priceB) {
                return 1;
            }

            if (priceA < priceB) {
                return -1;
            }

            return 0;
        });

        for (const key in resultProduct) {
            if (resultProduct.hasOwnProperty(key)) {
                const element = resultProduct[key]['PRICE'];
                let priceRp = resultProduct[key]['PRICE'];
                priceRp = Number.parseInt(priceRp); //ubah dulu ke integer
                priceRp = 'Rp.' + priceRp.toLocaleString('id'); //mengubah format angka ke format rupiah
                resultProduct[key]['PRICE'] = priceRp; //ubah price dengan format angka rupiah
            }
        }

        console.log(resultProduct);
    }
});