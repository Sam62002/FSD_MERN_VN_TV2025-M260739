// Function to check even/odd
function eveodd(n) {
    if (n % 2 === 0) {
        console.log("Even Number: " + n);
    } else {
        console.log("Odd Number: " + n);
    }
}

// Function to check positive/negative/zero
function posnegzer(n) {
    if (n > 0) {
        console.log("Positive Number: " + n);
    } else if (n < 0) {
        console.log("Negative Number: " + n);
    } else {
        console.log("Number is Zero: " + n);
    }
}

// Function to check divisibility by 3 and/or 5
function div(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("Divisible by 3 and 5: " + n);
    } else if (n % 3 === 0) {
        console.log("Divisible by 3: " + n);
    } else if (n % 5 === 0) {
        console.log("Divisible by 5: " + n);
    } else {
        console.log("Not divisible by 3 or 5: " + n);
    }
}

//Input value
let n = -20;
eveodd(n);
posnegzer(n);
div(n);

//Five Outputs with different values of n:
//1.Output: for n=30
//PS D:\FullStack_Mern\Assignment-2> node Question1.js
// Even Number: 30
// Positive Number: 30
// Divisible by 3 and 5: 30

//2.Output: for n=33
//PS D:\FullStack_Mern\Assignment-2> node Question1.js
// Odd Number: 33
// Positive Number: 33
// Divisible by 3: 33

//3.Output: for n=-37
//PS D:\FullStack_Mern\Assignment-2> node Question1.js
// Odd Number: -37
// Negative Number: -37
// Not divisible by 3 or 5: -37

//4.Output: for n=-57
//PS D:\FullStack_Mern\Assignment-2> node Question1.js
// Odd Number: -57
// Negative Number: -57
// Divisible by 3: -57

//5.Output: for n=-20
//PS D:\FullStack_Mern\Assignment-2> node Question1.js
// Even Number: -20
// Negative Number: -20
// Divisible by 5: -20