const numbers = [12, 5, 8, 99, 23];

const sum = numbers.reduce((acc, val) => acc + val, 0);

const largest = Math.max(...numbers);

// Print the results
console.log('Numbers:', numbers);
console.log('Sum:', sum);
console.log('Largest:', largest);

// output:
// PS D:\FullStack_Mern\Assignment-2> node Question5.js
// Numbers: [ 12, 5, 8, 99, 23 ]
// Sum: 147
// Largest: 99

