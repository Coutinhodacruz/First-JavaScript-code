const x1 = parseInt(prompt("Enter the x coordinate of the first point:"));
const y1 = parseInt(prompt("Enter the y coordinate of the first point:"));
const x2 = parseInt(prompt("Enter the x coordinate of the second point:"));
const y2 = parseInt(prompt("Enter the y coordinate of the second point:"));

// Check if the points are on a vertical or horizontal line
if (x1 === x2) {
    console.log("The points are on a vertical line.");
} else if (y1 === y2) {
    console.log("The points are on a horizontal line.");
} else {
    console.log("The points are not on a line perpendicular to an axis.");
}
