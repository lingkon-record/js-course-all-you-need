let poultry_farm = 150;
let beef = 700;
let hilsa_fish = 1200;

// let mango = 100;
// let apple = 200;
// let banana = 500;

if (poultry_farm < beef && poultry_farm < hilsa_fish) {
  console.log("Poultry Farm - is Cheapest meat in Bangladesh");
} else if (beef < hilsa_fish) {
  console.log("Beef - is Cheapest meat in Bangladesh");
} else {
  console.log("Hilsa_Fish - is Cheapest meat in Bangladesh");
}
