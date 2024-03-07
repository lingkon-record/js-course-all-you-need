// same code -- little changes

function test(){
    var msg = " I am scope"

        return function (){
            console.log(msg);
        }
      
}

var sayMsg = test()
sayMsg()