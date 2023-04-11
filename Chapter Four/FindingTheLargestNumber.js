//  pseudocode
// Set counter to 1
// Set largest to 0
//
// Repeat 10 times
// Input number
// If number > largest then
// Set largest to number
// End If
// Increment counter
// End Repeat
//
// Display largest


let counter = 1;
let largest = 0;

while (counter <= 10){
    let number = parseInt(prompt("Enter an Integer"));
    if (number > largest){
        largest = number;
    }
    counter++;
}
alert("The largest integer is: " + largest);

