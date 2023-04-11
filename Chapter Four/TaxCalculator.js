const TAX_RATE_LOW = 0.15;
const TAX_RATE_HIGH = 0.20;
const TAX_CEILING = 30000;

const citizens = [
    { name: "John", earnings: 25000 },
    { name: "Jane", earnings: 35000 },
    { name: "Bob", earnings: 20000 }
];

for (let i = 0; i < citizens.length; i++) {
    const citizen = citizens[i];
    const earnings = citizen.earnings;
    let tax;

    if (earnings <= TAX_CEILING) {
        tax = earnings * TAX_RATE_LOW;
    } else {
        const lowTax = TAX_CEILING * TAX_RATE_LOW;
        const highTax = (earnings - TAX_CEILING) * TAX_RATE_HIGH;
        tax = lowTax + highTax;
    }

    console.log(`${citizen.name}'s total tax: $${tax.toFixed(2)}`);
}
