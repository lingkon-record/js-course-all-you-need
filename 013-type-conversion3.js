// constructor always - capital letter

console.log(Boolean("follow me"));
console.log(Boolean("01751103"));

console.log("Empty string");
console.log(Boolean(""));

console.log("Null-Undefined");
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log("Any type of Zero - always false");
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(+0));

console.log("full digit/number - always true");
console.log(Boolean(50));

console.log(" +12 and -12");
console.log(Boolean(+12));
console.log(Boolean(-12));

// make string
var adults = true;
console.log("print true as a string, white color");
console.log(adults.toString());
