// written 1 to 9 but slowly

for (var i = 1; i <= 9; i++){


    (function (n) {
        setTimeout(function () {
            console.log(n);
        }, 1000 * n)
    })(i)
}

