let myJson = `[
    {
      "order_id": "SO-921",
      "created_at": "2018-02-17T03:24:12",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
        { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
      ]
    },
    {
      "order_id": "SO-922",
      "created_at": "2018-02-20T13:10:32",
      "customer": { "id": 40, "name": "Ririn" },
      "items": [
        { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
        { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
        { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
      ]
    },
    {
      "order_id": "SO-923",
      "created_at": "2018-02-28T15:20:43",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
        { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
      ]
    },
    {
      "order_id": "SO-924",
      "created_at": "2018-03-02T14:30:54",
      "customer": { "id": 40, "name": "Ririn" },
      "items": [
        { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
      ]
    },
    {
      "order_id": "SO-925",
      "created_at": "2018-03-03T14:52:22",
      "customer": { "id": 33, "name": "Ari" },
      "items": [
        { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
        { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
        { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
      ]
    },
    {
      "order_id": "SO-926",
      "created_at": "2018-03-05T16:23:20",
      "customer": { "id": 58, "name": "Annis" },
      "items": [
        { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
      ]
    }
  ]`;

/*1. Find all purchases made in February.*/
let myObj = JSON.parse(myJson);
const purchasesDataFeb = myObj.filter(function(obj) {
    let splitCreatedAt = obj['created_at'].split('-'); // split created_at berdasarkan tanda '-'
    return splitCreatedAt[1] === '02'; //ambil obj jika bulan 2 (februari)
});

/*2. Find all purchases made by Ari, and add grand total by sum all total price of items. The output should only a number.*/
let findCustomer = 'Ari';
let grandTotalPurchasesAri = 0;
for (const key in myObj) { //iterasi objek array
    if (myObj.hasOwnProperty(key)) {
        if (myObj[key].customer.name == findCustomer) { //pencarian customer
            for (const item in myObj[key].items) { //iterasi items pada customer
                if (myObj[key].items.hasOwnProperty(item)) {
                    grandTotalPurchasesAri += myObj[key].items[item].price; //totalkan harga pada item
                } //akhir if

            } //akhir for

        } //akhir if

    } //akhir if

} //akhir for


/*3. Find people who have purchases with grand total lower than 300000. The output is an array of people name. Duplicate name is not allowed.*/
let peopleUnderTotal = new Set();
let arr = [];
for (const key in myObj) { //iterasi objek array
    if (myObj.hasOwnProperty(key)) {
        let grandTotalPurchases = 0;
        for (const item in myObj[key].items) { //iterasi items pada customer
            if (myObj[key].items.hasOwnProperty(item)) {
                grandTotalPurchases += myObj[key].items[item].price; //totalkan harga pada item
            } //akhir if

        } //akhir for

        if (grandTotalPurchases < 300000) { // cek grand total belanja yang kurang dari 300000
            peopleUnderTotal.add(myObj[key].customer.name); //tambahkan customer tersebut ke set
        } //akhir if

    } //akhir if

} //akhir for

/* 1. */
console.log('Purchases data Februari');
console.log(purchasesDataFeb);

/* 2. */
console.log('Grand Total purchases Ari');
console.log(grandTotalPurchasesAri);

/* 3. */
console.log('People Grand Total under 3000')
console.log(peopleUnderTotal);