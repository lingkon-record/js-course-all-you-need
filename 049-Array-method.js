var arr = [ 4, 5, 6, 9 ]

// join
console.log("join : ", arr.join(' ') );
console.log("join : ", arr.join(' | ') );

// full fill , all index
console.log("fill : ", arr.fill(true));
console.log("fill : ", arr.fill(100));

// merge array 
var asia = ['dubai', 'dhaka']
var europe = [ 'london', 'new york']
var world_all = asia.concat(europe)
console.log(world_all);

// next
var name1 = [ "Limon", "Roky"]
var name2 = ["Nila", "Rima"]
var name_add = name1.concat(name2)
// console.log(Array.isArray(name1));

// next
var taka = [10,20,50]
var rupee = Array.from(taka)
rupee[3] = 100

console.log("Taka : ",taka);
console.log("Rupee : ",rupee);
