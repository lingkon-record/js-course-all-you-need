
var Rectangle = function (width, height) {
    return {
        this.width = width,
        this.height = height,

        this.draw = function(){
            console.log("I am rectangle");
            this.printProperties()
            console.log(this);
        },

        this.printProperties = function(){
            console.log("My width : " + this.width);
            console.log("My height : " + this.height);
        }
    }
}

var react3 = new Rectangle(10, 8)
react3.draw()