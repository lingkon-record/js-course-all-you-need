

function base(b){
    return function(n){
        var results = 1
        for (var i = 0; i < b; i++){
            results *= n
        }
        return results
    }
}

var base10 = base(10)
console.log(base10(2));

var base5 = base(5)
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));