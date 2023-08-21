console.log("Basic Numeric Loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("Reverse Loop:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Looping through an Array:");
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
console.log("Looping through an Object:");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(key, person[key]);
}
console.log("Looping through Array of Objects:");
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Carol", grade: "C" },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].grade);
}
console.log("Skipping Iterations:");
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  console.log(i);
}
console.log("Looping with a Step:");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
console.log("Looping through String Characters:");
const word = "hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
console.log("Nested Loop:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}
console.log("Looping with Array Methods:");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
console.log("Looping through Map:");
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const [key, value] of myMap) {
  console.log(key, value);
}
console.log("Looping through Set:");
const mySet = new Set([1, 2, 3, 4, 5]);
for (const value of mySet) {
  console.log(value);
}
console.log("Using break Statement:");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
console.log("Looping with Conditional Exit:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Reached 5, exiting loop");
    break;
  }
  console.log(i);
}
console.log("Looping with Labels (Rarely Used): ");

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(i, j);
  }
}
