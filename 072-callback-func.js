// bujhi nai

function sample(a, b, cb) {
    var c = a+b // c = 20
    var d = a - b // d = 10
    var result = cb(c,d) // c=20, d = 10
    return result
}
function sum(a,b){ 
    return a + b
}

var result = sample(15,5, sum)
console.log("result 1 : ",result);


var result2 = sample(50,30, function(c,d) {
    return (c - d) - 10
})
console.log("result 2 : ",result2);