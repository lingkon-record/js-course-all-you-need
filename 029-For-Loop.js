// 1 - 10
for (let countStart = 1; countStart < 11; countStart++) {
  console.log(countStart + "." + " Lingkon");
}

// 5-10-15-20-25-30-35-40-45-50
for (let countFive = 1; countFive < 50; countFive++) {
  let main = countFive * 5;
  console.log(main);
  if (main === 50) {
    break;
  }
}

// 1 - 10
for (let takarNotes = 200; takarNotes <= 1000; takarNotes += 100) {
  console.log(takarNotes + "." + " one-hundred");
}

//
for (let fiveTaka = 200; fiveTaka <= 250; fiveTaka += 5) {
  console.log(fiveTaka + "." + " Just 5 Taka");
}

// EVEN NUMBER
for (let val = 20; val <= 40; val++) {
  if (val % 2 == 0) {
    console.log(val);
  }
}

// explain
let sum = 0;
for (let dig = 5; dig <= 10; dig++) {
  sum += dig - 1;
  console.log(sum + " Line-Number" + dig);
}

//
