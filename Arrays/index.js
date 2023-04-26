// let a = [1,2,3,4];
// let b = [21, ...a, 59, 32];
// a[0] = 12;
// a[3] = 30;
// console.log(a.slice())
//
// console.log(a);
// console.log(b)
// console.log(a["length"]);
// console.log(a.length);
// Array.prototype.lol = "ha ha ";
// Array.prototype.lmao = "hahahahahahha";
// console.log(a.lol);
// console.log(a.lmao);





// let number = [2,4,6,8,10,12];
// console.log(number.indexOf(12));
// console.log(number.lastIndexOf(8));
// console.log(number.indexOf(11))


// b.unshift(33)
// b.shift()
// b.push(90)
// b.pop()
// number.slice()
// b.splice(120)
// number.slice()
// console.log(number)


// let vehicles = [];
// row1 = ["car", 6500];
// row2 = ["Bike", 500];
// row3 = ["Truck", 2000];
//
// // console.log(row1[0][0])
// vehicles.push(row1,row2,row3)
// row4 = ["Scooter", null];
// vehicles.push(row4)
//
//
// vehicles[0][2] = ["Toyota, Nissan"];
// vehicles[1][2] = ["Ford"];
// vehicles[2][2] = ["Honda"];
// vehicles[3][2] = [null]
//
// console.table(vehicles)

let prompt = require("prompt-sync")();

let number = [];

grade1 = [200,50,300,5];
grade2 = [10,25,7,100];
grade3 = [25,20,70,45];
grade4 = [500,170,11,35];
number.push(grade1,grade2,grade3,grade4);
console.table(number)

function grade(row, column, end){
    for (let i = row; i <= end; i++) {
        console.table(number[column][i]);
    }
}
let rows = prompt("Enter row ");
let colum = prompt("Enter column ");
let ends = prompt("enter the end ");
grade(rows,colum,ends)













