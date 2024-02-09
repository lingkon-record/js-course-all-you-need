var arr = [ 4,8,10,5,6,7,3,5,-8,-3,15,16,-11,-7,-5,78]

// 01
var results1 = arr.every(function (value) {
    return value % 2 == 0
})
console.log(results1);

// 02
var results2 = arr.every(function (value) {
    return value >= 0
})
console.log(results2);