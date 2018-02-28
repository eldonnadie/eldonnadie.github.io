function randomNumber(n) {
	
	if(isNaN(n)) {
		throw "Invalid test data";
	}
	
	if(n <= 0 || n >= 1000000) {
		throw "Test data out of range specifications.";
	}
	
	var totalSum = n;
	
	do {
		for(var i = 0; i < n - 1; i++) {
			//xoring the number, this becomes pretty random, also in this way we're sure that we get through all the spectrum of possible numbers
			totalSum ^= (flip() ? i : 0);
		}		
	} while(totalSum >= n) // if flip always returned false, then it would be an infinite loop
		
	return totalSum;
}

function flip() {
  return Math.random() >= 0.5;
}