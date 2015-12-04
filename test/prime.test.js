'use strict';

describe("Primes Table : ", function() {
	var p;
	require(['../app/prime.js'], function (init) {
		init();
	});
	/* global PrimesTable*/
	p = PrimesTable;
	describe("isPrime : ", function() {
		
	  it("should return true for 2,3,5,7,11,13,17,19", function() {
		expect(p.isPrime(2)).toBe(true);
		expect(p.isPrime(3)).toBe(true);
		expect(p.isPrime(5)).toBe(true);
		expect(p.isPrime(7)).toBe(true);
		expect(p.isPrime(11)).toBe(true);
		expect(p.isPrime(13)).toBe(true);
		expect(p.isPrime(17)).toBe(true);
		expect(p.isPrime(19)).toBe(true);
	  });
	  
	  it("should return false for 0,1,4,6,8,9,10,12", function() {
		expect(p.isPrime(0)).toBe(false);
		expect(p.isPrime(1)).toBe(false);
		expect(p.isPrime(4)).toBe(false);
		expect(p.isPrime(6)).toBe(false);
		expect(p.isPrime(8)).toBe(false);
		expect(p.isPrime(9)).toBe(false);
		expect(p.isPrime(10)).toBe(false);
		expect(p.isPrime(12)).toBe(false);
	  });
	  
	  it("should work for any prime number", function() {
		var testcase = ( Math.random() * 10000 );
		var primeResolution = function(number){
			for(var i = 2; i < number; i++){
				if(number % i === 0){
					return false;
				}
			}
			return true;
		};
		expect(p.isPrime(testcase)).toBe(primeResolution(testcase));
	  });
	  
	});
	
	describe('buildPrimesList : ', function () {
		
	  it('should return an array of 8 items', function () {
		expect(p.buildPrimesList(8).length).toBe(8);
	  });
	  
	  it('should contain only primes numbers', function () {
		expect(p.buildPrimesList(8)[0]).toBe(2);
		expect(p.buildPrimesList(8)[1]).toBe(3);
		expect(p.buildPrimesList(8)[2]).toBe(5);
		expect(p.buildPrimesList(8)[3]).toBe(7);
		expect(p.buildPrimesList(8)[4]).toBe(11);
		expect(p.buildPrimesList(8)[5]).toBe(13);
		expect(p.buildPrimesList(8)[6]).toBe(17);
		expect(p.buildPrimesList(8)[7]).toBe(19);
	  });
	  
	});

	describe('drawMultiplicationTable : ', function () {
		
	  it('should attach a list of awesomeThings to the scope', function () {
		var testcase = p.drawMultiplicationTable(p.buildPrimesList(3));
		var expectedResult = "";
		expectedResult += "|       |     2 |     3 |     5 |\n";
		expectedResult += "|     2 |     4 |     6 |    10 |\n";
		expectedResult += "|     3 |     6 |     9 |    15 |\n";
		expectedResult += "|     5 |    10 |    15 |    25 |\n";
		expect(testcase).toBe(expectedResult);
	  });
	  
	});
	
});