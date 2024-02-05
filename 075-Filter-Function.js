var arr = [1,2,3,4,5,6,7,8,9]

var filterArr = arr.filter(function (value) {
  //  return value  % 2 == 0 // even num
   // return value  % 2 == 1 // odd
    return value > 4 // less than
})
console.log("array-1 : ",filterArr);


// next
var arr2 = [1,2, 5,7,11,12,15,20]

function myFilter(arr2, cb) {
    var newArr = []
    for (var i = 0; i < arr2.length; i++) {
        if (cb(arr2[i], i, arr2)) {
            newArr.push(arr2[i])
        }
    }

    return newArr

}

console.log("odd : ",myFilter(arr2,function (values) {
    return values % 2 == 1 // odd
}));

console.log(myFilter(arr2, function(values) {
    return values > 4 // bigger
}));