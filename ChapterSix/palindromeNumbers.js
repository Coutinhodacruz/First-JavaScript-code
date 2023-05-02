let prompt = require("prompt-sync")();

function isPalindrome(num) {

    let str = num.toString();


    return str === str.split('').reverse().join('');
}

let num = prompt("Enter a number: ");
if (isPalindrome(num)) {
    console.log(num + " is a palindrome number.");
} else {
    console.log(num + " is not a palindrome number.");
}
