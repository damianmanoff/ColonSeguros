'use strict'

const DNA_CHAIN_NUMBER = 4;

function getNextPosition(direction, v, h){
	var positions = {
		"h" : [0,1],
		"v" : [1,0],
		"d" : [1,1]
	}
	return [v + positions[direction][0], h + positions[direction][1]]
}
function getLastPosition(direction, v, h){
	var positions = {
		"h" : [0,-1],
		"v" : [-1,0],
		"d" : [-1,-1]
	}
	return [v + positions[direction][0], h + positions[direction][1]]
}

function recursiveSolver(dna, pivote, v, h, direction, count, optimizer){
	if (count == DNA_CHAIN_NUMBER){
		return true;
	}

	if (dna.length <= h || dna.length <= v)
		return false;

	var nextPivote = dna[v][h];
	if (pivote == nextPivote){
		var next = getNextPosition(direction, v, h);
		return recursiveSolver(dna, pivote, next[0], next[1], direction, count+1, optimizer);
	}

	var last = getLastPosition(direction, v, h);
	optimizer[last[0]+ "-" +last[1]] = {direction : false}
	return false;
}

function canContinue(v,h,N, total, direction, optimizer){
	var totals = getNextPosition(direction, v,h)
	var response = ((totals[0] < N || totals[1] < N) && (optimizer[v +"-" + h] == undefined || optimizer[v +"-" + h][direction] != false));
	return response
}

function isMutant(dna){

	var optimizer = {}

	if (dna.length < DNA_CHAIN_NUMBER){
		return false;
	}
	var N = dna.length;
	for(var v = 0; v < N; v++){
		for(var h = 0; h < N; h++){
			var pivote = dna[v][h];			

			if (canContinue(v, h, N, DNA_CHAIN_NUMBER, "h", optimizer)){
				if (recursiveSolver(dna,pivote, v, h + 1,"h", 1, optimizer)){
					return true;
				}
			}
			if (canContinue(v, h, N, DNA_CHAIN_NUMBER, "v", optimizer)){

				if (recursiveSolver(dna,pivote, v+1, h, "v", 1, optimizer)){
					return true
				}
			}

			if (canContinue(v, h, N, DNA_CHAIN_NUMBER, "d", optimizer)){
				if (recursiveSolver(dna,pivote, v+1, h+1,"d", 1, optimizer)){
					return true
				}
			}
			
		}

	}
	return false;    
}

module.exports = { 
    isMutant : isMutant
}
