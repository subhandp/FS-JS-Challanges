const numbers = [...Array(1001).keys()]

const prime = (number = 0) => {
    if (number < 2) {
        return false
    }

    for (let index = 2; index < number; index++) {
        if (number % index == 0) {
            return false;
        } else {
            continue;
        }
    }

    return true;
}

console.log(numbers.filter((value) => value % 2 == 1));
console.log(numbers.filter((value) => value % 2 == 0));
console.log(numbers.filter((value) => value % 5 == 0));
console.log(numbers.filter((value) => prime(value)));
console.log(numbers.filter((value) => prime(value) && value < 100));