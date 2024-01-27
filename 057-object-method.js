var obj = {
    x:10,
    y:20,
    z:30
}

// keys see
console.log(Object.keys(obj));
// value see
console.log(Object.values(obj));
// all
console.log(Object.entries(obj));


// change value
var cow = {
    age:10,
    place:"Dhaka",
    code:1204
}

var cow2 = cow 
cow.age = 20
cow.place = "Natore"

console.log("cow2 : ",cow2);
console.log('cow : ',cow);


// object clone
var tiger = {
    place : "Sundorbon",
    age: 30,
    child: 5
}

var tiger2 = Object.assign({}, tiger)
tiger2.place = "Khulna"
tiger2.age = 5
tiger2.child = 1

console.log("Tiger : ", tiger);
console.log("Tiger2 : ", tiger2);