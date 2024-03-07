// revision again

{
    var x = 50

    function test(){
        // var x = 40
        // console.log(x);

        function nested(){
            // var y = 60
            console.log(x);
        }
        // console.log(y);
        nested()
    }
    test()
}