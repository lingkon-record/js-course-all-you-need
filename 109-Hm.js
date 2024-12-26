
var createReact = function (width, height) {
    return {
        width : width,
        height : height,

        draw: function(){
            console.log("I am rectangle");
            this.printProperties()
            console.log(this);
        },

        printProperties:function(){
            console.log("My width : " + this.width);
            console.log("My height : " + this.height);
        }
    }
}

var react1 = createReact(10, 0)
react1.draw()

var react2 = createReact(40,30)
react2.draw()