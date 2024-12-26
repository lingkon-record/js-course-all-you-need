// try it in browser console

var rect = {
    width : 100,
    height : 50,

    draw: function() {
        console.log(" I am rectangle");
        console.log(" My width is " + this.width);
        console.log(" My height is " + this.height);
    }
}

rect.draw() // 100 & 50

rect.height = 200
rect.draw() // 200 & 50