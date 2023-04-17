let prompt = require("prompt-sync")();
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;


for (let i = 1; i <= 5; i++) {
    let name = prompt("Enter student " + i + " name:");
    let grade = prompt("Enter student " + i + " grade (A, B, C, or D):");


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
            i--;
    }
}

// Display the final results
alert("Grade distribution:\nA: " + aCount + "\nB: " + bCount + "\nC: " + cCount + "\nD: " + dCount);
