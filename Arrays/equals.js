

//  const Person = class{
//     value ;
// }
//
//
// person1 = new Person()
//  person1.value = 2
// person2 = new Person()
//  person2.value = 2
//
// numbers = {
//     1 : 2,
//     2 : 4,
//     4 : 5
// }
// listNumbers = list(numbers)
//  console.log(listNumbers)
//
//  // console.log(nums.valueOf())
// //  for (num of nums.valueOf()) {
// //      console.log(num)
// //  }
//  function  deepEqual(first, second){
//     if (typeof first === typeof second)
//     return first === second
//  }
//
//
//  console.log(deepEqual(person1, 2))

function deepEqual(a, b) {
    // Check if values are identical or both null
    if (a === b || (a === null && b === null)) {
        return true;
    }

    // Check if both values are objects
    if (typeof a === "object" && typeof b === "object" && a !== null && b !== null) {
        // Get property names of each object
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        // Check if objects have the same number of properties
        if (keysA.length !== keysB.length) {
            return false;
        }

        // Compare values of each property
        for (let key of keysA) {
            if (!b.hasOwnProperty(key) || !deepEqual(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    // Otherwise, values are not equal
    return false;
}
let number = ''
let second = ''
console.log(deepEqual(number, second))