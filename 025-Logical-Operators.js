let math = 70;
let bangla = 50;
// let optional_sub = 0;
let optional_sub;

if (math >= 33 && bangla >= 33 && optional_sub >= 0) {
  console.log("HSC PASS");
} else {
  console.log("HSC FAIL");
}

// or
let eng = 80;
let history = 60;
let hyer_math = 12;
if (eng >= 33 || history >= 33 || hyer_math >= 33) {
  console.log("SSC PASS");
} else {
  console.log("SSC FAIL");
}

// not
let myAge = 22;
let myBirdsAge = 2;
let varify_age = !(myAge < myBirdsAge);
let varify_age2 = !!(myAge < myBirdsAge);

console.log(varify_age);
console.log(varify_age2);
