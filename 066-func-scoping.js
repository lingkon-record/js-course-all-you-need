function first() {
    var a = 10
    function second() {
        var a = 20
        console.log(a);
    }
    console.log(a);
    second()
}
first()




// next
function test(n) {

    function a() {
        return n%3 == 0
    }

    function b() {
        return n%5 == 0
    }

    if( a() && b()) {
        console.log(n + ' is a divisible by both 3 and 5');
    } else {
        console.log("not a valid number");
    }
}

test(15)