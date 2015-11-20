/**
 * Prime Filter
 * Receives a number and computes the total number of primes between 2 and that number.
 * The results (each prime) is sent to a consumer that stores them somewhere.
 */

var fs = require('fs');
var print = console.log
var FIRST = 2;
var BATCH = 100 
var LAST;
var id;
var start;

var time_before = 0;
var AVERAGE = 0;

function isPrime(n) {
	for (var i = 2; i*i <= n; i++) {
		if (n % i == 0)
			return 0;
	}
	return 1;
};

// this object is shared between event handlers a
var counters = {
		processed : 0,
		primes : 0
}


function inc_primes(n) {
	counters.primes += n;
	return counters.primes;
}

function inc_processed(n) {
	counters.processed += n;
	return counters.processed;
}

// returns a closure
function searchPrimes(first, last) {
		
		var local_count = 0;
		for (var i = first; i < last; i++) {
			if (isPrime(i)) {
				local_count++;
				//print('found prime :'+i)
			}
		}

		var global_count = inc_primes(local_count);
		var iii = inc_processed(last - first) 

		if (iii >= LAST - FIRST) {

			//reset
			counters = {
				processed : 0,	
				primes : 0
			}	
			
			var time_taken = new Date().getTime() - time_before;
			if(AVERAGE == 0)
				AVERAGE = time_taken
			else
				AVERAGE = (AVERAGE + time_taken)/2

			console.log(AVERAGE);
		}

		var time_taken = new Date().getTime() - time_before;
			if(AVERAGE == 0)
				AVERAGE = time_taken
			else
				AVERAGE = (AVERAGE + time_taken)/2

			console.log(AVERAGE);

};
time_before = new Date().getTime();
searchPrimes(2, 9000000);
