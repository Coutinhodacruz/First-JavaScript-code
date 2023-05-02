function calculateCharges(hoursParked){
    let charge = 2;
    if (hoursParked > 3){
        charge += Math.ceil(hoursParked -3) * 0.5;
    }
    return Math.min(charge, 10);
}
const hoursParkedArray = [2, 4.5, 7, 1.5];
let totalReceipt = 0;

for (let i = 0; i < hoursParkedArray.length; i++) {
    const hoursParked = hoursParkedArray[i];
    const charge = calculateCharges(hoursParked);
    console.log(`Customer ${i + 1}: ${charge.toFixed(2)}`);
    totalReceipt += charge;
}

console.log(`Total receipts ${totalReceipt.toFixed(2)}`)