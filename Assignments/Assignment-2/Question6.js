// Theatre booking status
const totalSeats = 120;
const bookedSeats = 78;

// Calculate available seats
const availableSeats = totalSeats - bookedSeats;

// Determine status message
let status;
if (availableSeats < 0) {
	status = 'Invalid data (booked more than total)';
} else if (availableSeats < 20) {
	status = 'Almost Full';
} else if (availableSeats <= 60) {
	status = 'Moderate Availability';
} else {
	status = 'Plenty of Seats Available';
}

// Print exact number and status
console.log('Available seats:', availableSeats);
console.log('Status:', status);

// Output:
//PS D:\FullStack_Mern\Assignment-2> node Question6.js
// Available seats: 42
// Status: Moderate Availability

