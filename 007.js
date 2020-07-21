let words = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

let countWord = ['aku', 'ingin', 'dapat'];

for (const word of countWord) {
    let regex = new RegExp(word, 'gi');
    let resultFind = words.match(regex); //mencari kata  pada seluruh string menggunakan protype match dengan parameter regex ket. gi untuk global dan insensitive kapital
    console.log(word + ' : ' + resultFind.length + ' kali ditemukan'); //hitung banyak kata yang ditemukan
}