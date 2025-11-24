const expenses = [2000, 1500, 3500, 4000];

function totalExpenses(arr) {
	const total = arr.reduce((sum, value) => sum + value, 0);
	console.log(`Total money spent: ₹${total}`);
	return total;
}

totalExpenses(expenses);

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question15.js
// Total money spent: ₹11000