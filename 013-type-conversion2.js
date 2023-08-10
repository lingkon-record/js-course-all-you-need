// number k string

var class_1 = 2001;
var class_2 = 2002;
var class_3 = 2003;
var class_4 = 2004;
var class_5 = 2005;
var class_6 = 2006;
console.log(class_1); // show number

console.log("easy-way-01 : with gap");
console.log(
  String(class_1),
  String(class_2),
  String(class_3),
  String(class_4),
  String(class_3),
  String(class_4)
);

console.log("easy-way-01 : without gap");
console.log(String(class_5) + String(class_6)); // 20052006

console.log("easy-way-02 : with gap");
console.log(
  class_1.toString(),
  class_2.toString(),
  class_3.toString(),
  class_4.toString(),
  class_5.toString(),
  class_6.toString()
);

console.log("easy-way-02 : without gap");
console.log(class_1.toString() + class_2.toString()); // 20012002 okay
