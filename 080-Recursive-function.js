// 01
function sayHi (n){
    if ( n == 0){
        return
    }
    console.log("Hi, I am calling");
    sayHi ( n - 1)
}

sayHi(6)



// 02
function sum(n){
    if ( n == 1){
        return 1
    }
    return n + sum(n - 1)
}

console.log(sum(5));



// 03
let arr = [ 10,50,40]

function summOfArray(arr, lastIndex){
    if (lastIndex < 0){
        return 0
    }
    return arr[lastIndex] + summOfArray(arr, lastIndex - 1)
}
console.log(summOfArray(arr, arr.length - 1));