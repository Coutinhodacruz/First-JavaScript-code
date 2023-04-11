let totalMiles = 0;
let totalGallons = 0;

console.log("Enter miles driven and gallons used for each trips (Enter -1 to quit): ");

while (true){
    const tripMiles = parseInt(prompt("Miles driven"));
    if (tripMiles === -1){
        break;
    }
    const tripGallons = parseInt(prompt("Gallon used "));
    if (tripGallons === -1){
        break;
    }
    const mpg = tripMiles / tripGallons;
    console.log(`Miles per gallon for this trip: ${mpg.toFixed(2)}`);

    totalMiles += tripMiles;
    totalGallons += tripGallons;
    const totalMpg = totalMiles / totalGallons;
    console.log(`Combined miles per gallon up to this point: ${totalMpg.toFixed(2)}`);
}

