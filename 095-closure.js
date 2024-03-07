// closure

function test(){
    var msg = " I am scope"

        function sayMsg(){
            console.log(msg);
        }
        sayMsg()
}


test()
