function secondHighest(numbers) {
    let highest = 0;
    let secondHighest = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > highest) {
            secondHighest = highest;
            highest = numbers[i];
        } else if (numbers[i] > secondHighest && numbers[i] < highest) {
            secondHighest = numbers[i];
        }
    }

    return secondHighest;
}

console.log(secondHighest([21,28,10,4,40,40]));
console.log(secondHighest([2,3,6,-4,9,9,8]));



// function newSecondLargest(newNumbers){
//     let newHighestNumber = 0;
//     let newSecondHighestNumber =0;
//
//     for (let i = 0; i < newNumbers.length; i++) {
//         if (newNumbers[i] > newHighestNumber){
//             newSecondHighestNumber = newHighestNumber;
//             newHighestNumber = newNumbers[i];
//         }else if (newNumbers[i] > newSecondHighestNumber && newNumbers[i] < newHighestNumber){
//             newSecondHighestNumber = newNumbers[i];
//         }
//     }
//     return newSecondHighestNumber;
// }
// console.log(newSecondLargest([2,3,6,-4,9,9,8]));
