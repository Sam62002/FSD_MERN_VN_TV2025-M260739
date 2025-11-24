function markGrade(marks) {
    if(marks>=90 &&marks<=100){
        console.log("Grade: A")
    }
    else if(marks>=80 && marks<=90){
        console.log("Grade: B")
    }
    else if(marks>=60 && marks<70){
        console.log("Grade:C")
    }
    else if(marks>=0 && marks<60){
        console.log("Grade:F")
    }
    else{
        console.log("Keep Practicing learn more")
    }
}


//input values
let age=19;
let result=(age>=18)?"Adult": "Minor";
let marks=65;
//console commands
markGrade(marks);
console.log("Age Status: "+result);
console.log("Mark: "+marks);

//1.outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question2.js
// Grade: A
// Age Status: Minor
// Mark: 90

//2.outputs:
//PS D:\FullStack_Mern\Assignment-2> node Question2.js
// Grade: B
// Age Status: Adult
// Mark: 85


//3.outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question2.js
// Grade:c
// Age Status: Adult
// Mark: 65


//4.outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question2.js
// Grade:F
// Age Status: Minor
// Mark: 40