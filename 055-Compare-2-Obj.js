var classNine = {
    rony : 70,
    roki :80
}

var classTen = {
    rima : 70,
    nila :80
}

if ( classNine.rony == classTen.rima && classNine.roki == classTen.nila) {
    console.log(true);
} else {
    console.log(false);
}

// console.log(JSON.stringify(classNine) == JSON.stringify(classTen)); // why false , i dont know


// next 

var one = {
    rony : 70,
    roki :80
}

var two = {
    rony : 70,
    roki :80
}
// short cut
console.log(JSON.stringify(one) == JSON.stringify(two)); // true