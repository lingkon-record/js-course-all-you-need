var arr = [6,10,20,30,50,60]

for ( var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

// sum all
var sum = 0
for (var i = 0; i < arr.length ; i++) {
    sum += arr[i]
}
console.log("SUM result : ",sum);
