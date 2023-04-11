const itemValues = [
    {item: 1, value: 239.99},
    {item: 2, value: 129.75},
    {item: 3, value: 99.95},
    {item: 4, value: 350.89}
];

console.log("Item Value");
for (let values = 0; values < itemValues.length; values++) {
    const {item, value} = itemValues[values];
    console.log(`${item} ${value.toFixed(2)}`);
}
console.log("N N2 N3 N4");
for (let i = 1; i <= 5; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3} ${i ** 4}`);
}
