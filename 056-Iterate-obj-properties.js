// check
var obj = {
    x:10,
    y:20,
    z:30
}

console.log('x' in obj); // true
console.log('m' in obj); // false

// in
for (var i in obj) {
    console.log(i + " : " + obj[i]);
}