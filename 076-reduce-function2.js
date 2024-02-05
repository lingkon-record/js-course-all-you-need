
var arr = [1,2,7,200]

function myReduce (arr, cb, acc){
    for ( var i = 0; i < arr.length; i++) {
        acc = cb (acc , arr[i])
    }
    return acc
}


var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)


var max = arr.reduce(function ( prev, curr) {
    return Math.max(prev, curr)
}, 0)


var min = arr.reduce(function ( prev, curr) {
    return Math.min(prev, curr)
}, 0) // 0 is smallest in array


console.log(sum, max, min); // 210 , 200 , 0