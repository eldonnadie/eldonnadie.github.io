function randomNumber(n) {
	
	if(n < 0 || n > 1000000) {
		throw "Test data out of range specifications";
	}
	
	var totalSum = n;
	do {
		for(var i = 0; i < n - 1; i++) {
			//xoring the number 
			totalSum ^= (flip() ? i : 0);
		}		
	} while(totalSum >= n)
		
	return totalSum;
}

function flip() {
  return Math.random() >= 0.5;
}