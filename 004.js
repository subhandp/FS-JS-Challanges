const tahunKabisatOperator = (tahun) => {
    const tahunKabisat = ((tahun % 4 == 0) && (tahun % 100 != 0)) || (tahun % 400 == 0);
    return tahunKabisat ? 'adalah tahun kabisat' : 'adalah bukan tahun kabisat';

}

function tahunKabisat(tahunAwal, tahunAkhir) {
    for (let tahun = tahunAwal; tahun <= tahunAkhir; tahun++) {
        console.log(`${tahun}: ${tahunKabisatOperator(tahun)}`);
    }
}

tahunKabisat(1600, 2020);