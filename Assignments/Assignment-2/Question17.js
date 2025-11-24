function downloadFile(filename, callback) {
	setTimeout(() => {
		console.log(`Downloading ${filename}...`);
		if (typeof callback === 'function') callback();
	}, 2000);
}

// Example usage
downloadFile('file.zip', () => console.log('Download complete!'));

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question17.js
// Downloading file.zip...
// Download complete!