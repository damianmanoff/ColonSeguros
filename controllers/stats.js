'use strict'
// Cargamos los modelos para usarlos posteriormente
var DNA = require('../models/dna');

// Conseguir datos de un usuario
function getStats(req, res){
    DNA.count({}, function(err, total){
	    console.log( "Number of docs: ", total );
	    var mutants = DNA.count({mutant : true}, function(err2, mutants){
	    	console.log(total)
	    	var response = {"count_mutant_dna":mutants, "count_human_dna":(total-mutants), "ratio":(mutants/total)}
	    	return res.send(response);
	    })
	});
    
}

module.exports = { 
    getStats : getStats
}