function rechargeOption(choice) {
	switch (choice) {
		case 1:
			console.log("Data Pack");
			break;
		case 2:
			console.log("Talktime");
			break;
		case 3:
			console.log("Validity Recharge");
			break;
		default:
			console.log("Invalid Choice");
	}
}

// Example calls
rechargeOption(1);
rechargeOption(2);
rechargeOption(3);
rechargeOption(9); // Invalid Choice

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question11.js
// Data Pack