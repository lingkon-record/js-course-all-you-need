var date = new Date();
console.log(date); // 2023-08-18T17:39:44.768Z
console.log(date.toDateString()); // Fri Aug 18 2023
console.log(date.toTimeString()); // 23:39:44 GMT+0600 (Bangladesh Standard Time)
console.log(date.toLocaleString()); // 8/18/2023, 11:39:44 PM

console.log("specefic date - find out");
// specefic date

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth());
// When you run this code, it will output the zero-based index of the current month to the console.
//For example, if you run this code on August 18th, the output will be 7 because August is the 8th month and its index is 7.

console.log("getHours-getMinutes-getSeconds-getMilliseconds");
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
