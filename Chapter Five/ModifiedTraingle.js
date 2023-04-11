const size = 10;

// print the top half of the square
for (let i = 1; i <= size; i++) {
    let row = "";

    // print the left triangle
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    // print the middle gap
    for (let j = 1; j <= size - i; j++) {
        row += " ";
    }

    // print the right triangle
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

// print the bottom half of the square
for (let i = size; i >= 1; i--) {
    let row = "";

    // print the left triangle
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    // print the middle gap
    for (let j = 1; j <= size - i; j++) {
        row += " ";
    }

    // print the right triangle
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
