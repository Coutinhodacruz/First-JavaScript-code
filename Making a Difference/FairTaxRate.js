// Define the FairTax rate
const FAIRTAX_RATE = 0.23;

// Define the expense categories
const expenseCategories = [
    'housing',
    'food',
    'clothing',
    'transportation',
    'education',
    'health care',
    'vacations'
];

// Prompt the user for expenses in each category
const expenses = {};
for (const category of expenseCategories) {
    const expense = parseFloat(prompt(`Enter your ${category} expenses:`));
    if (!isNaN(expense)) {
        expenses[category] = expense;
    }
}

// Calculate the total expenses and FairTax
let totalExpenses = 0;
for (const category in expenses) {
    totalExpenses += expenses[category];
}
const fairTax = totalExpenses * FAIRTAX_RATE;

// Print the results
console.log(`Your total expenses are $${totalExpenses.toFixed(2)}`);
console.log(`Your estimated FairTax is $${fairTax.toFixed(2)}`);
