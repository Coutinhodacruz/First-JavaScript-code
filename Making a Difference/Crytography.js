var prompt = require("prompt-sync")();
function encrypt(num) {
    encrypt(prompt("Enter four digit"));
    if (!Number.isInteger(num) || num < 1000 || num > 9999) {
        throw new Error("Input must be a four-digit integer");
    }

    const d1 = (num % 10 + 7) % 10;
    const d2 = (Math.floor(num / 10) % 10 + 7) % 10;
    const d3 = (Math.floor(num / 100) % 10 + 7) % 10;
    const d4 = ((num / 1000) + 7) % 10;

    const encryptedNumber = d3 * 1000 + d4 * 100 + d1 * 10 + d2;
    return encryptedNumber;
}
