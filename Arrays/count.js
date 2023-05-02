// Function to count the number of uppercase 'B' characters in a string
function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            count++;
        }
    }
    return count;
}

let word =  "Bring Back our girls But dont let Being Bad Boy Bag Blue Boat"
let result = countBs(word)
console.log(result);

// // Function to count the number of a given character in a string
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }
//
// // Rewrite countBs to make use of countChar
// function countBs(str) {
//     return countChar(str, 'B');
// }
//
//


