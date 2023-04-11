let binary = prompt("Enter a binary integer:");

let decimal = 0;
let position = 1;

for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
        decimal += position;
    }
    position *= 2;
}

alert(`The decimal equivalent of ${binary} is ${decimal}.`);
