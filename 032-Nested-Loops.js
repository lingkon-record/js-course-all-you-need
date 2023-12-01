// একটা লুপের মধ্যে আরেকটা লুপ
var totalLine = 5
for (var i= 1 ; i <= totalLine; i++) {
var result = " "
for(var j = 1; j<= i; j++) {
result += j + " "
}
console.log(result)
}

// Example 2 : ChatGPT 

var totalRows = 5;

for (var row = 1; row <= totalRows; row++) {
    var pattern = "";

    for (var column = 1; column <= row; column++) {
        pattern += "* "; // Adjust the pattern as needed
    }

    console.log(pattern);
}
