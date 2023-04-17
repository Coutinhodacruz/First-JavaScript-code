let amount;
let principal = 1000.0;
let rate;

for (rate = 0.05; rate <= 0.10; rate += 0.01) {
    console.log(`Interest rate: ${rate * 100}%`);


    console.log("Year\tAmount on deposit");


    for (let year = 1; year <= 10; ++year) {

        amount = principal * Math.pow(1.0 + rate, year);

        t
        console.log(`${year}\t${amount.toFixed(2)}`);
    }

    console.log();
}
