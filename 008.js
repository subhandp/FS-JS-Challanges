class Str {
    static lower(str) {
        return str.toLowerCase();
    }

    static upper(str) {
        return str.toUpperCase();
    }

    static capitalize(str) {
        //split str menjadi array kemudian gunakan map fungsi
        let kapitals = str.split(' ').map(function(s) {
            //menggunkan method class upper untuk merubah kapital awalan huruf dan menggabungkan dengan huruf lanjutanya kembali
            return this.upper(s.substring(0, 1)) + s.substring(1);
        }.bind(this));

        return kapitals.join(' ');
    }

    static reverse(str) {
        //menggunakan split str menjadi array kemudia membalik isi array dengan reverse selanjutnya gabungkan menjadi string dengan join
        const revStr = str.split(' ').reverse().join(' ');
        return revStr;
    }

    static contains(str, listContain) {
        if (Array.isArray(listContain)) {
            for (const item of listContain) {
                if (str.includes(item)) {
                    return true;
                }
            }
            return false;
        } else if (typeof str == 'string') {
            return str.includes(listContain);
        }

    }

    static random(leng) {
        let str = '';
        const alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let rand;
        if (typeof leng === 'number') {
            for (let i = 0; i < leng; i++) {
                rand = Math.floor(Math.random() * alphanumeric.length); //dapatkan bilangan acak dalam rentang panjang variabel alphanumeric
                str += alphanumeric[rand]; //dapatkan karakter sesuai bilangan random
            } //akhir for
        } //akhir if
        else {
            for (let i = 0; i < 16; i++) {
                rand = Math.floor(Math.random() * alphanumeric.length);
                str += alphanumeric[rand];
            } //akhir for
        } // akhir elseif

        return str;

    }


    static slug(str, charSlug = null) {
        let myCharSlug = '-';
        if (charSlug !== null)
            myCharSlug = charSlug;

        str = str.trim(); //hilangkan  whitespace
        str = this.lower(str); //ubah dulu ke huruf kecil semua dengan method properti lower
        return str.replace(/[^\w ]+/g, '').replace(/ +/g, myCharSlug); //ubah nonaplhanumeric menjadi slug menggunakan regex \W world
    }

    static count(str) {
        console.log(str.length);
        return str.length;
    }

    static countWords(str) {
        let result = str.split(' ').length;
        console.log(result);
        return result;
    }

    static trim(str, trimMax = null, trimText = null) {
        let myTrimMax = 100;
        let myTrimText = '...';
        if (trimMax !== null && typeof trimMax === 'number')
            myTrimMax = trimMax;
        if (trimText !== null && typeof trimText === 'string')
            myTrimText = trimText;

        if (str.length < 100) {
            console.log(str);
            return str;
        } else {
            let trimStr = str.substring(0, myTrimMax) + myTrimText;
            console.log(trimStr);
            return trimStr;
        }

    }

    static trimWords(str, trimMax = null, trimText = null) {
        let myTrimMax = 30;
        let myTrimText = '...';
        if (trimMax !== null && typeof trimMax === 'number')
            myTrimMax = trimMax;
        if (trimText !== null && typeof trimText === 'string')
            myTrimText = trimText;

        let listWords = str.split(' '); //ubah ke array dulu
        if (listWords.length < 30) {
            console.log(str);
            return str;
        } else {
            let trimStr = listWords.slice(0, myTrimMax);
            trimStr = trimStr.join(' ') + myTrimText;;
            console.log(trimStr);
            return trimStr;
        }
    }
}

// let mystr = new Str();

// let hasil = mystr.capitalize('saya ingin makan');
console.log(Str.contains('Saya ingin makan sate', 'makan')); // true
console.log(Str.contains('Saya ingin makan sate', 'rujak')); // false
console.log(Str.contains('Saya ingin makan sate', ['sate', 'rujak'])); // true

console.log(Str.capitalize('saya ingin makan'));

console.log(Str.random()); // hef2nCi273c8D2dz
console.log(Str.random(6)); // ckS3jP
console.log(Str.random(32)); // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4
const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
console.log(Str.slug(title, '*'));
// console.log(Str.slug(title, '_'));
Str.count('lorem ipsum');
Str.countWords('lorem ipsum');

// const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// Str.trim('Less than 100 characters') // Less than 100 characters

// Str.trim(text) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...

// Str.trim(text, 20) // Lorem ipsum dolor si...

// Str.trim(text, 20, '·····') // Lorem ipsum dolor si·····


const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

Str.trimWords('Less than 30 words') // Less than 30 words

Str.trimWords(text2) // Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi...

Str.trimWords(text2, 3) // Lorem ipsum dolor...

Str.trimWords(text2, 3, '·····') // Lorem ipsum dolor·····