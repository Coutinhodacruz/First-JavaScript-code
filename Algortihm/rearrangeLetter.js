// const arr = [0,3,2,4,5,1,6,7,8];
// let str = "someiclon";
// let res = "";
//
// for (let i = 0; i < arr.length; i++) {
//     res += str[arr.indexOf(i)];
// }
//
// console.log(res);



// const arr = [0,3,2,4,5,1,6,7,8];
// const str = "someiclon";
// let result = "";
//
// for (let i = 0; i < arr.length; i++) {
//     result += str[arr[i]];
// }
//
// console.log(result);


function getResult(arr, str) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += str[arr[i]];
    }
    return result;
}

const arr = [0,3,2,4,5,1,6,7,8];
const str = "someiclon";
const result = getResult(arr, str);

console.log(result);
