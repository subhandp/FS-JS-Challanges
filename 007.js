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

['aku', 'ingin', 'dapat'].map((value) => {
    console.log('kata ' + value + ' ada ' + words.match(new RegExp(value, 'gi')).length);
});