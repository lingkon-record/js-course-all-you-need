// 01 - find number
var arr = [10,20,30,40]

let matching = arr.find(function(value) {
   // return value == 9 // undefined
    return value == 30 // 30
})

console.log(matching); // find match and show me


// 02 - find index

let indexCheck = arr.findIndex(function(value) {
    return value == 40 // 3 index
})
console.log(indexCheck);