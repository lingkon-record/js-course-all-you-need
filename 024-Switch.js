var date = new Date();
var today = date.getDay();

// start
switch (today) {
  case 0:
    console.log(" রবিবার Rhobibar");
    break;

  case 1:
    console.log("সোমবার Shombar");
    break;

  case 2:
    console.log("মঙ্গলবার Monglebar");
    break;

  case 3:
    console.log("বুধবার Bhoodbar");
    break;

  case 4:
    console.log("বৃহস্পতিবার Bihoshpothibar");
    break;
  case 5:
    console.log("শুক্রবার Shoukrobar");
    break;

  case 6:
    console.log(" শনিবার Shonibar");
    break;

  default:
    console.log("Something is missing - cheack please");
    break;
}
