// chatgpt
function multiplyBy(factor){
    return function(number){
        return number * factor
    }
}

// high order
const double = multiplyBy(2) // factor 2
const triple = multiplyBy(3) // factor 3

console.log(double(5)); // argument : 5
console.log(triple(4)); // argument : 4