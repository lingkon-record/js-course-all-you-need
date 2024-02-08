
var arr = [ 4,8,10,5,6,7,3,5,-8,-3,-11,-7,-5,78]
var arr2 = [ 4,8,10,5,6,7,3,5,-8,-3,15,16,-11,-7,-5,78]

// asending
arr.sort(function (a, b) {
    if ( a > b ){
        return 1
    } else if( a <b) {
        return -1
    } else {
        return 0
    }
})

console.log("asending : ",arr);



// desending
arr2.sort(function (a, b) {
    if ( a > b ){
        return -1 // ultra
    } else if( a <b) {
        return 1 // ultra
    } else {
        return 0
    }
})

console.log("desending : ",arr2);