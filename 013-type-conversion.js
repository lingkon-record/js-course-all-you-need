// 013-type-conversion
var totalNote = "10";
var noteName = 5;

console.log(totalNote + noteName); // 105, but  i want 15 ---------------

console.log(totalNote - noteName); // 5, okay  i get 5
console.log(totalNote * noteName); // 50, okay  i get 50
console.log(totalNote / noteName); // 2, okay  i get 2

console.log("I need proper solution for all member");

console.log(Number(totalNote) + noteName);
console.log(Number.parseInt(totalNote) + noteName);

console.log("Matbori - error");
var kingPrice = "Mango";
var kingList = 7;
console.log(Number(kingPrice) * kingList);
