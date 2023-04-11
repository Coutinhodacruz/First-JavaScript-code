function binaryToDecimal(binary) {
    let decimal = 0;
    let base = 1;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1") {
            decimal += base;
        }
        base *= 2;
    }

    return decimal;
}

const binaryNumber = "1101";
const decimalNumber = binaryToDecimal(binaryNumber);

console.log(decimalNumber); // Output: 13
