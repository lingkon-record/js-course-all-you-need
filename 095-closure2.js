// same code -- little changes

function test(){
    var msg = " I am scope"

        function sayMsg(){
            console.log(msg);
        }
        sayMsg()
}

// test()
var sayMsg = test()
console.log(sayMsg);