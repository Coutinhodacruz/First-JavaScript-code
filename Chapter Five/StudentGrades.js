// Initialize counters for each grade
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

// Loop to input grades for five students
for (let i = 1; i <= 5; i++) {
    // Read student name and grade from user input
    let name = prompt("Enter student " + i + " name:");
    let grade = prompt("Enter student " + i + " grade (A, B, C, or D):");

    // Use switch statement to increment the corresponding grade counter
    switch (grade) {
        case 'A':
            aCount++;
            break;
        case 'B':
            bCount++;
            break;
        case 'C':
            cCount++;
            break;
        case 'D':
            dCount++;
            break;
        default:
            alert("Invalid grade entered for student " + i + ".");
            i--; // Repeat the loop iteration for invalid input
    }
}

// Display the final results
alert("Grade distribution:\nA: " + aCount + "\nB: " + bCount + "\nC: " + cCount + "\nD: " + dCount);
