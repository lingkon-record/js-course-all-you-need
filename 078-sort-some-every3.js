var persons = [

    {
        names : "Rakib",
        age : 26
    },
    {
        names : "Niya",
        age : 55
    },
    {
        names : "Jaki",
        age : 78
    },
    {
        names : "Tola",
        age : 63
    },

    {
        names : "Himel",
        age : 11
    },
    {
        names : "Toyas",
        age : 8
    }

]

// 01
persons.sort(function ( a , b) {
    if ( a.age > b.age) {
        return 1
    } else if ( a.age < b.age){
        return -1
    } else {
        return 0
    }
})

console.log("persons - small to big : ",persons);


// 02
persons.sort(function ( a , b) {
    if ( a.age > b.age) {
        return -1
    } else if ( a.age < b.age){
        return 1
    } else {
        return 0
    }
})

console.log("persons - big to  small : ",persons);