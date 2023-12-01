// একটা লুপের মধ্যে আরেকটা লুপ
var totalLine = 5
for (var i= 1 ; i <= totalLine; i++) {
var result = " "
for(var j = 1; j<= i; j++) {
result += j + " "
}
console.log(result)
}
