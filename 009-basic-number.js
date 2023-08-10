// javaScript is a case sensative : "Var vs VAR vs var" isn't same

var myRoll = 114624;
var myCGPA = 3.52;

console.log(Number(10));
console.log(Number("20"));

console.log("Int/Float");
console.log(Number.parseInt(26 / 5)); // only-5
console.log(Number.parseFloat(26 / 5)); // 5.2
console.log("Remove 3.52");
console.log(Number.parseInt(myCGPA)); // 3

console.log("MAX_VALUE");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log("MIN_VALUE");
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
