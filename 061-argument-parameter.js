
function totalTk(salary, bonus) {
    var cashTotal = salary + bonus
    console.log(cashTotal);
}
totalTk(1200,800)
totalTk(2400,300)

// array : sum , as much as possible
var data1 = [ 5,10,15,20]
var data2 = [20,30,50]
var data3 = [50,100,50]

function sumOfArray(data) {
    var sum = 0
    for (var i = 0; i < data.length; i++) {
        sum += data[i]
    }
    console.log(sum);
}

sumOfArray(data1)
sumOfArray(data2)
sumOfArray(data3)
