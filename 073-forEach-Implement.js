var arr = [ 1,2,3,4,5]

// var sum = 0
// arr.forEach(function (value, index, arr) {
//     sum += value
// })
// console.log(sum); // all number sum


// next 1

// function forEach (arr) {
//     for (var i = 0 ; i < arr.length ; i++) {
//         console.log(arr[i]);
//     }
// }
// forEach(arr)


// next 2 
function forEach(arr, cb) {
    for (var i = 0 ; i < arr.length ; i++) {
        cb(arr[i])
    }
}

forEach(arr, function(value) {
    console.log(value);
})

