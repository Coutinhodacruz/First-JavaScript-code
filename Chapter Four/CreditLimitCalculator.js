const customers = [
    {
        accountNumber: 1234,
        beginningBalance: 1000,
        charges: 500,
        credits: 300,
        creditLimit: 1500
    },
    {
        accountNumber: 5678,
        beginningBalance: 2000,
        charges: 800,
        credits: 600,
        creditLimit: 2500
    },
    {
        accountNumber: 9101,
        beginningBalance: 1500,
        charges: 1200,
        credits: 1000,
        creditLimit: 2000
    }
];

for (let i = 0; i < customers.length; i++) {
    const { accountNumber, beginningBalance, charges, credits, creditLimit } = customers[i];
    const newBalance = beginningBalance + charges - credits;

    console.log(`Account number: ${accountNumber}`);
    console.log(`New balance: ${newBalance}`);
    if (newBalance >= creditLimit) {
        console.log("Credit limit exceeded");
    }
    console.log();
}
