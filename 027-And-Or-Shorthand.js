let nameBox = "";
// let nameBox = "MD ";
let fullName = "";

if (nameBox.length === 0) {
  fullName = "Lingkon ISLAM";
} else {
  fullName = nameBox;
}
console.log(fullName);

// short-cut
let real_name = "";
let sur_name = real_name || "Junior Lingkon";
console.log(sur_name);

let real_name2 = "MD LINGKON ISLAM ";
let sur_name2 = real_name2 || "Junior Lingkon";
console.log(sur_name2);

// shortCUT
let money = 500;
600 > money && console.log("Okay Boss");

// next
let caseFile = true;
caseFile && console.log("CaseFile true");
