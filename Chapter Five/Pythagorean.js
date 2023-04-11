for (let side1 = 1; side1 <= 500; side1++) {
    for (let side2 = 1; side2 <= 500; side2++) {
        for (let hypotenuse = 1; hypotenuse <= 500; hypotenuse++) {
            if (side1 * side1 + side2 * side2 === hypotenuse * hypotenuse) {
                console.log(side1 + ", " + side2 + ", " + hypotenuse);
            }
        }
    }
}
