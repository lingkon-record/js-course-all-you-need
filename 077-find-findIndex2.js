// new system

var arr = [10,20,30,40]

function myFind(arr, cb){
    for (var i =0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
        }
    }
}

var result = myFind(arr, function(value){
    return value == 20
    //  return value == 9 // undefined
})

console.log(result);