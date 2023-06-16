
function buyVehicle(year) {
    return `This vehicle of year ${year} has ${this.wheels} wheels`
}
let vehicle = {wheels: 4, buyVehicle};
let vehicle2 = {wheels: 5, buyVehicle};

console.log(vehicle.buyVehicle(2020));
console.log(vehicle2.buyVehicle(2025));

console.log(buyVehicle.call(vehicle,2020))

let array = [2, 3, 4, 5, 6];
console.log(array.length);
console.log("toString" in vehicle)
console.log(vehicle.__proto__);
console.log(Object.prototype);