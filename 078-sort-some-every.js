//TODO: confusion in output


var arr = [20,1,10,15,5,2]
var listOut = [8,7,1,6,9,4,3,6,1,2] // ignore 10,15
var listOut2 = [8,7,1,6,9,4,3,6,1,2, -2,-5,-1, -82] 


// sort
arr.sort()
console.log("Sort List : ",arr); // ajob output

// sort
listOut.sort()
console.log("ListOut : ",listOut); // okay

// negative sort
listOut2.sort()
console.log("ListOut2 : ",listOut2); // negative
