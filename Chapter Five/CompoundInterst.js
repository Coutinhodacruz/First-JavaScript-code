let amount; // amount on deposit
let principal = 1000.0; // initial amount before interest
let rate; // interest rate

for (rate = 0.05; rate <= 0.10; rate += 0.01) {
    console.log(`Interest rate: ${rate * 100}%`);

    // display headers
    console.log("Year\tAmount on deposit");

    // calculate amount on deposit for each of ten years
    for (let year = 1; year <= 10; ++year) {
        // calculate new amount on deposit for specified year
        amount = principal * Math.pow(1.0 + rate, year);

        // display the year and the amount
        console.log(`${year}\t${amount.toFixed(2)}`);
    }

    console.log(); // output a blank line between interest rates
}
