

function greetings(msg){
    function greet (names){
        return msg + ',,,'+ names + "!!!!"
    }
    return greet
}

var gm = greetings("Good night")
var msg = gm("Lingkon")

console.log(msg);

let hello = greetings("Hello")
console.log(hello("Kamal-Bhai"));