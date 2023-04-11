let firstNumber = parseInt(prompt("Enter first Number: "));
let secondNumber = parseInt(prompt("Enter second Number: "));

if (firstNumber === secondNumber){
    console.log(0);
}else if (firstNumber > secondNumber){
    console.log(1);
}else {
    console.log(-1);
}