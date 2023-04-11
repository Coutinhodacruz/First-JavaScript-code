let baseLength = parseInt(prompt("Enter the length of the base of the triangle (1-10): "));

if (baseLength < 1 || baseLength > 10){
    console.log("Invalid Input base length must be between 1 and 10: ");
}else {
    let triangle = " ";
    for (let row = 1; row <= baseLength; row++) {
        for (let column = 1; column <= row ;column++) {
            triangle += "*";
        }
        triangle += "\n";
    }
    console.log(triangle)
}

