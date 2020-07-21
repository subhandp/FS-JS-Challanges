let words = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

let cencors = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];

let cencorsStar = (str) => { //membuat char sensor (*) sesuai jumlah karakter yg di sensor
    let starChar = '';
    for (let index = 0; index < str.length; index++)
        starChar += '*';
    return starChar;
}

let tempWords;
for (const cencor of cencors) {
    let regex = new RegExp(cencor, 'gi'); //mencari kata yg akan di sensor menggunakan regex ket. gi untuk global dan insensitive kapital
    tempWords = words.replace(regex, cencorsStar(cencor)); //ganti kata yang disesnor dengan karakter *
    words = tempWords;
}

console.log(words);