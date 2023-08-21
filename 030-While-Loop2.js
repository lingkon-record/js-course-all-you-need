// ChatGPT : while Loop

console.log("Example 1: Counting from 1 to 10");
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}

console.log("Example 2: Summing numbers from 1 to 100");
let sum = 0;
let mango = 1;
mango;
while (mango <= 100) {
  sum += mango;
  mango++;
}
console.log(sum);

console.log("Example 3: Repeating a string");
let message = "Hello!";
let repetitions = 3;
while (repetitions > 0) {
  console.log(message);
  repetitions--;
}

console.log("Example 4: Printing even numbers between 1 and 20");
let real_box = 2;
while (real_box <= 20) {
  console.log(real_box);
  real_box += 2;
}

console.log("Example 5: Countdown from 10 to 1");

let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

console.log("Example 6: Finding the first power of 2 greater than 100");

let power = 1;
while (Math.pow(2, power) <= 100) {
  power++;
}
console.log(Math.pow(2, power));

console.log("Example 7: Reversing a string");
let str = "hello";
let reversed = "";
let index = str.length - 1;
while (index >= 0) {
  reversed += str[index];
  index--;
}
console.log(reversed);

console.log("Example 8: Generating a multiplication table");
let num = 5;
let multiplier = 1;
while (multiplier <= 10) {
  console.log(`${num} x ${multiplier} = ${num * multiplier}`);
  multiplier++;
}

console.log("Example 9: Calculating factorial");
let number = 5;
let factorial = 1;
while (number > 1) {
  factorial *= number;
  number--;
}
console.log(factorial);

console.log("Example 10: Drawing patterns");
let rows = 5;
while (rows > 0) {
  let pattern = "* ".repeat(rows);
  console.log(pattern);
  rows--;
}
