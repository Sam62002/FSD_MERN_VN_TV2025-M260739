function routeForBus(busNumber) {
	if (!Number.isInteger(busNumber)) {
		console.log(`Invalid bus number: ${busNumber}`);
		return;
	}

	const route = busNumber % 2 === 0 ? 'Route A (even)' : 'Route B (odd)';
	console.log(`Bus ${busNumber} goes to ${route}.`);
}

// Example calls
routeForBus(24); // even -> Route A
routeForBus(13); // odd  -> Route B

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question10.js
// Bus 24 goes to Route A (even).
// Bus 13 goes to Route B (odd).