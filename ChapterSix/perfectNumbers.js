
function isPerfect(number) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }
    return sum === number;
}

for (let i = 2; i <= 1000; i++) {
    if (isPerfect(i)) {
        console.log(i + " is a perfect number.");
        console.log("Factors:");
        for (let j = 1; j < i; j++) {
            if (i % j === 0) {
                console.log(j);
            }
        }
    }
}
