// only focus  - condition er upor
let x = 5;
while (x <= 10) {
  console.log(x + ". Mr. Jackson");
  x++;
}

// example-02
var serverRunning = true;

while (serverRunning) {
  let randomNum = Math.floor(Math.random() * 10 + 1);
  if (randomNum == 9) {
    console.log("Good-News: Lingkon Win the Lotary");
    serverRunning = false;
  } else {
    console.log("get digit: ." + randomNum);
  }
}
