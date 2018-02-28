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
		
		// if flip always returns false (always xor 0), then the program will stuck, the second time it might be fixed, but we have a dependency on 
		// which you don't know if might be overriden over time, still n-1 is pretty random
		if(totalSum == n) {
			return n-1;
		}   
	} while(totalSum >= n)
		
	return totalSum;
}

function flip() {
  return Math.random() >= 0.5;
}