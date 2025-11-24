function placeOrder(callback) {
	console.log("Order placed");
	setTimeout(() => {
		if (typeof callback === 'function') callback();
	}, 1000);
}

function cookFood(callback) {
	console.log("Food cooking");
	setTimeout(() => {
		if (typeof callback === 'function') callback();
	}, 2000);
}

function deliverFood() {
	setTimeout(() => {
		console.log("Food delivered");
	}, 1000);
}

// Chain the calls so output is:
// Order placed -> Food cooking -> Food delivered
placeOrder(() => cookFood(deliverFood));

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question16.js
// Order placed
// Food cooking
// Food delivered