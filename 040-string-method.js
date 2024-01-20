// concat
var firstName = "MD LINGKON"
var lastName = "AHMED"
var fullName = firstName.concat(" ",lastName)
console.log("fullName : ",fullName);

// sub-str
var subName = fullName.substr(11)
console.log(subName);

// index check - word er
console.log(fullName.charAt(11));

// is it true?
console.log(fullName.startsWith("M")); // md
console.log(fullName.startsWith("MD LINGK")); // MD LINGK
console.log(fullName.endsWith("D")); // ahmed


// upperCase / LowerCase
let articleBlog = " This is a dog and CAT"
console.log(articleBlog.toUpperCase());
console.log("article_BLOG_Post".toUpperCase());
console.log(articleBlog.toLowerCase());

// trim
console.log("    MY name is      Lingkon           ".trim()); // start - end , space

// sentence break by single word
console.log(fullName.split(" "));
