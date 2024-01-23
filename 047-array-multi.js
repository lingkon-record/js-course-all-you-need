var arr =[

     [ 100,80,70,60], [50, 60, 70, 180], [20,60,80,70]

     ]

console.log(arr[1][3]);  // 180
console.log(arr[0][0]); // 100


for (var i =0 ; i < arr.length ; i++) {
    for (var j=0; j < arr[i].length ; j++) {
        console.log("Element "+ i + " : " + arr[i][j]);
    }
}
