function namcour() {
   return ["sam harrish", "JavaScript"];
   
}
function uppercase(str) {
    return str.toUpperCase();
}   

//check 10 characters in the message
function checkLength(str) {
    if (str.length > 10) {
        return "it has more than 10 Characters";
    } else {
        return "it has less than 10 Characters";
    }   
}     

function checkword(str, word) {
    if (str.includes(word)) {
        return `The word "${word}" is found in the string.`;
    } else {
        return `The word "${word}" is not found in the string.`;
    }
}

const user = namcour();
const [name, course] = user;
const print=(`Hello ${name} welcome to the ${course}`); 
const uppername=uppercase(name);
const lengthcheck=checkLength(print);
const wordcheck=checkword(print, "JavaScript");


console.log(print) //-1
console.log(uppername)//-2
console.log(lengthcheck)//-3
console.log(wordcheck)//-4

//Output:   
// PS D:\FullStack_Mern\Assignment-2> node Question3.js
// Hello sam harrish welcome to the JavaScript
// SAM HARRISH
// it has more than 10 Characters
// The word "JavaScript" is found in the string.