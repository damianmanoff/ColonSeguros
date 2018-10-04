'use strict'
const Solver = require('../../controllers/solver');
const expect = require('chai').expect
const assert    = require("chai").assert;

describe('Solver module', () => {
  describe('"isMutant"', () => {
    it('should export a function', () => {
      expect(Solver.isMutant).to.be.a('function')
    })
	
	it('Solver should return a boolean', () => {
	  const solverResult = Solver.isMutant([])
	  expect(solverResult).to.be.a('Boolean')
	})
	
	it('Solver with mutant dna return true by example', () => {
		var dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})

	it('Solver with no mutant dna return false by example', () => {
		var dna = ["ATGCTA","CCGTGC","TTATGT","AGAAGG","ACCCTA","TCACTG"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isFalse(solverResult);
	})

	it('Solver with horizontal mutant dna at beginning return true', () => {
		var dna = ["AAAATA","CCGTGC","TTATGT","AGAAGG","ACCCTA","TCACTG"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})
	

	it('Solver with horizontal mutant dna at end return true', () => {
		var dna = ["ACTG","TGAC","CTGA","CCCC"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})

	it('Solver with horizontal mutant dna at end return true', () => {
		var dna = ["AACATATATA","CCGTGCGCGC","TGAGAGATATGT","AGATTCCAGG","GGACCGACTA","TGAAGTCCCC"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})


	it('Solver with vertical  mutant dna at beginning return true', () => {
		var dna = ["ATCATA","ACGTGC","ATATGT","AGAAGT","ACCCTT","TCACTT"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})

	it('Solver with vertical  mutant dna at end return true', () => {
		var dna = ["TTCATA","ACGTGC","ATATGT","AGAAGT","ACCCTT","TCACTT"]
	  	const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})

	it('Solver big no mutant dna at end return false', () => {

		var str1 = "ATCGTG";
		var str2 = "TGATAC";
		var oddstr = "";
		var evenstr = "";
		for (var i =0; i < 100; i++){
			oddstr+=str1;
			evenstr+=str2;
		}
		var dna = []
		for (var i =0; i < 600; i+=2){
			dna.push(oddstr);
			dna.push(evenstr);
		}
	  	assert.isTrue(dna.length == dna[0].length);
		

		const solverResult = Solver.isMutant(dna)
	  	assert.isFalse(solverResult);
	})
	it('Solver big mutant dna at end return true', () => {

		var str1 = "ATCGTG";
		var str2 = "TGATAC";
		var oddstr = "";
		var evenstr = "";
		for (var i =0; i < 100; i++){
			oddstr+=str1;
			evenstr+=str2;
		}
		var dna = []
		for (var i =0; i < 599; i+=2){
			dna.push(oddstr);
			dna.push(evenstr);
		}
		evenstr = evenstr.substring(0, evenstr.length - 4) + "AAAA"
	  	dna[599] = evenstr
	  	

		const solverResult = Solver.isMutant(dna)
	  	assert.isTrue(solverResult);
	})
  })
})





