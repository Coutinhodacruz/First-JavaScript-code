// Define the FairTax rate
const FAIRTAX_RATE = 0.23;


const expenseCategories = [
    'housing',
    'food',
    'clothing',
    'transportation',
    'education',
    'health care',
    'vacations'
];

const expenses = {};
for (const category of expenseCategories) {
    const expense = parseFloat(prompt(`Enter your ${category} expenses:`));
    if (!isNaN(expense)) {
        expenses[category] = expense;
    }
}


let totalExpenses = 0;
for (const category in expenses) {
    totalExpenses += expenses[category];
}
const fairTax = totalExpenses * FAIRTAX_RATE;

console.log(`Your total expenses are $${totalExpenses.toFixed(2)}`);
console.log(`Your estimated FairTax is $${fairTax.toFixed(2)}`);
