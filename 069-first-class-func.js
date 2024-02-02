// first class
function add(a,b){
    return a+b 
}

let box = add // func store
console.log(box(20,30));
console.log(typeof box);

// func - store in array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](1,2));

// func - store in obj
var obj = {
    sum : add
}

console.log(obj);
console.log(obj.sum(5,5));

// 
setTimeout(function () {
    console.log("I have created ...");
},2000) // 2 second