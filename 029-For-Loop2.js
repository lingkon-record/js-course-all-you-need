// exam-no-001
console.log("Basic Numeric Loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// exam-no-002
console.log("Reverse Loop:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// exam-no-003
console.log("Looping through an Array:");
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// exam-no-004
console.log("Looping through an Object:");
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
  console.log(key, person[key]);
}

// exam-no-005
console.log("Looping through Array of Objects:");
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Carol", grade: "C" },
];
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].grade);
}

// exam-no-006
console.log("Skipping Iterations:");
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  console.log(i);
}

// exam-no-007
console.log("Looping with a Step:");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// exam-no-008
console.log("Looping through String Characters:");
const word = "hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}

// exam-no-009
console.log("Nested Loop:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

// exam-no-010
console.log("Looping with Array Methods:");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});

// exam-no-011
console.log("Looping through Map:");
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
for (const [key, value] of myMap) {
  console.log(key, value);
}

// exam-no-012
console.log("Looping through Set:");
const mySet = new Set([1, 2, 3, 4, 5]);
for (const value of mySet) {
  console.log(value);
}

// exam-no-013
console.log("Using break Statement:");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// exam-no-014
console.log("Looping with Conditional Exit:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Reached 5, exiting loop");
    break;
  }
  console.log(i);
}

// exam-no-015
console.log("Looping with Labels (Rarely Used): ");

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(i, j);
  }
}
