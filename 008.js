class Str {
    static lower(str) {
        console.log(str.toLowerCase());
        return str.toLowerCase();
    }

    static upper(str) {
        console.log(str.toUpperCase());
        return str.toUpperCase();
    }

    static capitalize(str) {
        //split str menjadi array kemudian gunakan map fungsi
        let kapitals = str.split(' ').map(function(s) {
            //menggunkan method class upper untuk merubah kapital awalan huruf dan menggabungkan dengan huruf lanjutanya kembali
            return this.upper(s.substring(0, 1)) + s.substring(1);
        }.bind(this));

        console.log(kapitals.join(' '));
        return kapitals.join(' ');
    }

    static reverse(str) {
        //menggunakan split str menjadi array kemudia membalik isi array dengan reverse selanjutnya gabungkan menjadi string dengan join
        const revStr = str.split(' ').reverse().join(' ');
        console.log(revStr);
        return revStr;
    }

    static contains(str, listContain) {
        if (Array.isArray(listContain)) {
            for (const item of listContain) {
                if (str.includes(item)) {
                    console.log(true);
                    return true;
                }
            }
            return false;
        } else if (typeof str == 'string') {
            console.log(str.includes(listContain));
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

        console.log(str);
        return str;

    }


    static slug(str, charSlug = null) {
        let myCharSlug = '-';
        if (charSlug !== null)
            myCharSlug = charSlug;

        str = str.trim(); //hilangkan  whitespace
        str = this.lower(str); //ubah dulu ke huruf kecil semua dengan method properti lower
        str = str.replace(/[^\w ]+/g, '').replace(/ +/g, myCharSlug); //ubah nonaplhanumeric menjadi slug menggunakan regex \W world
        console.log(str);
        return str;
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



Str.lower('MAKAN') // makan

Str.upper('malam') // MALAM

Str.capitalize('saya ingin makan') // Saya Ingin Makan

Str.reverse('kasur') // rusak

Str.contains('Saya ingin makan sate', 'makan') // true
Str.contains('Saya ingin makan sate', 'rujak') // false
Str.contains('Saya ingin makan sate', ['sate', 'rujak']) // true

Str.random() // hef2nCi273c8D2dz
Str.random(6) // ckS3jP
Str.random(32) // tbFGeCycTBy8FTfXqOTkDd0YtlQngLt4

const title = 'JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'
Str.slug(title) // javascript-typescript-dart-bahasa-mana-yang-akan-populer-di-2018
Str.slug(title, '_') // javascript_typescript_dart_bahasa_mana_yang_akan_populer_di_2018

Str.count('lorem ipsum') // 11

Str.countWords('lorem ipsum') // 2

const text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

Str.trim('Less than 100 characters')

Str.trim(text1)

Str.trim(text1, 20)

Str.trim(text1, 20, '·····')

const text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

Str.trimWords('Less than 30 words')

Str.trimWords(text2)

Str.trimWords(text2, 3)

Str.trimWords(text2, 3, '·····')