// index again , new way

var arr = [10,20,30,40]

function myFind(arr, cb){
    for (var i =0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i // hmm
        }
    }
}

var result = myFind(arr, function(value){
    return value == 20 // index 1
   
})

console.log(result); // index 1