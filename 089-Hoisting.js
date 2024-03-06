var a = 20
// newPrint(a) // newPrint : 20

print(10)
var newPrint = print // newPrint : 10

newPrint(45)


function print(a){
    console.log(a);
}

print(a)