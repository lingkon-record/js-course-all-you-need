// 01
var arr = [1,2,3,4,5,35]

var sum = arr.reduce(function (prev, curr) {
    return prev + curr
}, 100) // 100 + arr[] = 115

console.log(sum); // 100 + arr[] = 115


var max = arr.reduce(function ( prev, curr) {
    return Math.max(prev, curr)
}, 34) // 34 vs 35 = 35 win ,, <<<<

console.log(max); // 35 largest number okay, not 34