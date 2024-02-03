
var b = 10

function a() {
    var d = 5 

    return function () {
        console.log(d);
    }
}

var abc = a()
console.dir(abc) // test in chrome console , okay