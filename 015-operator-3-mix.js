// Logical Operators : and-or-not
console.log("Subject: Logical Operators-part-01");

var us_dollar = 80;
var euro = 100;
var rupee = 70;
var pak = 50;

console.log(euro > us_dollar && rupee > pak); // need both truth
console.log(us_dollar < euro && rupee > pak); // need both truth
console.log(euro > us_dollar || pak > rupee); // need one truth
console.log(pak > rupee); // 50>70 - 50 will win

console.log("Subject: Logical Operators-part-02");
const a = true;
const b = false;

console.log(a && b); // need both--- Output: false
console.log(a || b); // need one ---- Output: true
console.log(a && true); // both true ---- Output: true

console.log("Subject: Comparison Operators");

console.log("Subject: Operator precedence ");
// Operator precedence : describes the order in which operations are performed in an arithmetic expression.
let count_serial = 40 + 20 * 3;
console.log(count_serial); // 40 + (20*3)
let x = (100 / 50) * 3;
console.log(x);
