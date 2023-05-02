function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSum = sumArray(arr);
console.log(totalSum);


function addArray(array){
    let sum  = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const number = [9,7,5,3,1];
console.log(addArray(number))
