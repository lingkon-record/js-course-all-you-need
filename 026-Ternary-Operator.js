// relate
let myAge = 22;
let ageType = "";

if (myAge % 2 == 0) {
  ageType = "EVEN";
} else {
  ageType = "ODD";
}
console.log("myAGE : " + ageType);

// short-cit
let takaNote = 71;
let result = takaNote % 2 == 0 ? "Even-Taka" : "Odd-Taka";
console.log(result);

// short
let digital = 10 > 20 ? "10 Big" : "20 Big";
console.log(digital); // true : false
