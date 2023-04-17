const size = 5;
for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size - i; j++) {
        row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
    }
    console.log(row);
}

for (let i = size - 2; i >= 0; i--) {
    let row = "";
    for (let j = 0; j < size - i; j++) {
        row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
    }
    console.log(row);
}

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result /= base;
    }
    return result;
};
console.log(power(2, 10));


