function isMultiple(num1, num2) {
    return num2 % num1 === 0;
}


const pairs = [
    [2, 6],
    [3, 10],
    [5, 25],
    [7, 49],
];

pairs.forEach((pair) => {
    const num1 = pair[0];
    const num2 = pair[1];
    console.log(`${num2} is${isMultiple(num1, num2) ? "" : " not"} a multiple of ${num1}`);
});
