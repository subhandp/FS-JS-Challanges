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
    if (i % 2 === 0)
        even.push(i);
    if (i % 2 === 1)
        odd.push(i);
    if (i % 5 === 0)
        multifive.push(i);
    if (bilanganPrimaCek(i)) {
        primeNumber.push(i);
        if (i < 100)
            primeNumberUnder.push(i);
    }

}

console.log(even);
console.log(odd);
console.log(primeNumber);
console.log(primeNumberUnder);