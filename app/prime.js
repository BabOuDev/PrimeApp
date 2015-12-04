'use-strict';

function PrimesTable(){

	// Calculate if a given number is a Prime Number, return a Boolean flag.
	PrimesTable.isPrime = function(number){
		// the smallest prime number is 2
		if(number < 2)
			return false;
		else if(number === 2)
			return true;
		// handling even numbers (in order not to go in the loop in half of cases)
		else if(number % 2 === 0)
			return false;
		// generic prime number checking
		for(var i = 3; i < number; i++){
			if(number % i === 0)
				return false;
		}
		return true;
	};
	
	// build a list of primes numbers with a given size, returns the list as an Array
	PrimesTable.buildPrimesList = function(size){
		var primesList = [];
		var i = 2;
		// search for primes numbers until the list reach the given size
		while(primesList.length < size){
			if(PrimesTable.isPrime(i))
				primesList.push(i);
			i++;
		}
		return primesList;
	};
	
	// Draw a multiplication table for a given list of numbers.
	PrimesTable.drawMultiplicationTable = function(list){
		// add a value at the begining of the list in order to draw first line and first column
		list.unshift(1);
		// add the first empty cell
		var table = "|       ";
		// draw the table
		for(var i in list){
			for(var j in list){
				var value = list[i] * list[j];
				// the first empty cell is already filled
				if(value === 1)
					continue;
				//
				var blank = '      '.substr(0,6-value.toString().length);
				table += "|" + blank + value + " ";
			}
			table += "|\n";
		}
		return table;
	};
	
	var init = function(number){
		// check and get the user input from command line or init
		var input;
		try{
			input = parseInt( number || process.argv[2] );
		}catch(e){
			console.log('Please specify a number as argument in command line or by calling PrimesTable.init function');
			return;
		}
		if(isNaN(input)){
			console.log('Please specify a valid number as input');
			return;
		}
		// build the list of primes numbers
		var primeList = PrimesTable.buildPrimesList(input);
		// build and draw the multiplication table from primes numbers list
		var result = PrimesTable.drawMultiplicationTable(primeList);
		// log the result
		console.log(result);
	}();
	
};

PrimesTable();