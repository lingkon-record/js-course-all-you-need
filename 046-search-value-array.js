var arr = [4, 8, 20, 55, 33, 89, 65 ]
var find = 21
var isFound = false

for ( var i=0; i < arr.length; i++) {
    if ( arr[i] == find) {
        console.log("Data found, index : " + i);
        isFound = true
        break
    }
}

if(!isFound) {
    console.log("Data not found");
}
