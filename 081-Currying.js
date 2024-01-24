// Normal function 
function add(a, b, c) {
  return a + b + c;
}

// Currying version
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}


// Hm Nayem
let results= curryAdd(5)(10)(20)
console.log(results)


// ChatGPT : Usage
console.log(add(1, 2, 3)); // Output: 6

const curriedAdd = curryAdd(1);
const partiallyAppliedAdd = curriedAdd(2);
console.log(partiallyAppliedAdd(3)); // Output: 6


/* Definition : Currying is a technique in functional 
programming where a function is transformed into a
sequence of functions, each taking a single argument.
*/
