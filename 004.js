(function() {
    for (let tahun = tahunAwal; tahun <= tahunAkhir; tahun++) {
        const tahunKabisat = ((tahun % 4 == 0) && (tahun % 100 != 0)) || (tahun % 400 == 0);
        tahunKabisat ? console.log(`${tahun} adalah tahun kabisat`) : console.log(`${tahun} adalah bukan tahun kabisat`);
    }
})(tahunAwal = 1600, tahunAkhir = 2020);