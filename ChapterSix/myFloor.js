function myFloor(num){
    const integer = parseInt(num);
    if (integer > num){
        return integer - 1;
    }else {
        return integer;
    }
}

function myCeil(num){
    const integer = parseInt(num);
    if (integer > num){
        return integer + 1;
    }else {
        return integer;
    }
}
const num = 3.14159;

console.log(`Floor of ${num}: ${myFloor(num)}`);
console.log(`Ceil of ${num}: ${myCeil(num)}`);
