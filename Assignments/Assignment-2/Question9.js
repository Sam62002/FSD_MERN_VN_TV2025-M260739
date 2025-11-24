const pay1 = 300; // Delivery person 1
const pay2 = 500; // Delivery person 2

const message = pay1 === pay2
	? `Both delivery persons earn the same: ₹${pay1}`
	: pay1 > pay2
	? `Delivery person 1 earns more by ₹${pay1 - pay2}`
	: `Delivery person 2 earns more by ₹${pay2 - pay1}`;

console.log(message);

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question9.js
// Delivery person 2 earns more by ₹200
