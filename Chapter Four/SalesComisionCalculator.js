const ITEM_VALUES = {
    "item1": 239.99,
    "item2": 129.75,
    "item3": 99.95,
    "item4": 350.89,
};

const salespersonName = prompt("Enter salesperson's name:");
const item1Sold = parseInt(prompt("Enter number of item1 sold:"));
const item2Sold = parseInt(prompt("Enter number of item2 sold:"));
const item3Sold = parseInt(prompt("Enter number of item3 sold:"));
const item4Sold = parseInt(prompt("Enter number of item4 sold:"));

const totalSales = (item1Sold * ITEM_VALUES.item1) +
    (item2Sold * ITEM_VALUES.item2) +
    (item3Sold * ITEM_VALUES.item3) +
    (item4Sold * ITEM_VALUES.item4);
const commission = 0.09 * totalSales;
const earnings = 200 + commission;

console.log(`${salespersonName}'s earnings for last week: $${earnings.toFixed(2)}`);