let even = [],
    odd = [],
    multifive = [],
    primeNumber = [],
    primeNumberUnder = [];

const bilanganPrimaCek = number => {
    for (let i = 2; i < number; i++)
        if (number % i === 0) return false;
    return number > 1;
}

for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) //cek jika bilangan genap
        even.push(i);
    if (i % 2 === 1) //cek jika bilangan ganjil
        odd.push(i);
    if (i % 5 === 0) //cek jika bilangan tersebut merupakan hasil perkalian 5 dengan memakai modulo
        multifive.push(i);
    if (bilanganPrimaCek(i)) { //cek apakah bilangan tersebut bilangan prima
        primeNumber.push(i); //masukan bilangan ke list bilangan prima
        if (i < 100) //jika bil. prima kurang dari 100 masukan ke list bil. prima kurang dari 100
            primeNumberUnder.push(i);
    }

}

console.log(even);
console.log(odd);
console.log(primeNumber);
console.log(primeNumberUnder);