// follow 78,4-NO

let hello = [10,20,20,50]
var arr = [ 4,8,10,5,6,7,3,5,15,16,78]


// 01
var results1 = hello.every(function (value) {
    return value % 2 == 0 // 100 / 2 = 0 ends
})
console.log(results1);

// 02
var results2 = arr.every(function (value) {
    return value >= 0
})
console.log(results2); // nai , > 0



// more one : revision please

var results4 = arr.some(function (value){
    return value <= 0
})
console.log(results4);


var results5 = hello.some(function (value){
    return value <= 0
})
console.log(results5);