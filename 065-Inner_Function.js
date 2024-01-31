
function something(greetting, name) {
    function sayHi() {
        console.log(greetting,name);
    }
    sayHi()
}

something("Morning,", "Rakibians")


// next
function boxer(message,name2) {
    function getFirstName() {
        if (name2) {
            return name2.split(' ')[0]
        } else {
            return ''
        }
    }
    var speech = message+ ' '+ getFirstName()
    console.log(speech);
}

boxer("Kickboxing,", "Andrew Tate")