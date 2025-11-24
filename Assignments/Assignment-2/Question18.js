function startExam(callback) {
	console.log('Exam started📝');
	setTimeout(() => {
		if (typeof callback === 'function') callback();
	}, 1000);
}

function evaluateExam(callback) {
	console.log('Evaluating answers📃');
	setTimeout(() => {
		if (typeof callback === 'function') callback();
	}, 2000);
}

function declareResult() {
	setTimeout(() => {
		console.log('Result declared📢');
	}, 1000);
}

// Chain: Exam started -> Evaluating answers -> Result declared
startExam(() => evaluateExam(declareResult));

// Outputs:
// PS D:\FullStack_Mern\Assignment-2> node Question18.js
// Exam started📝
// Evaluating answers📃
// Result declared📢