'use strict'
// Cargamos los modelos para usarlos posteriormente
var DNA = require('../models/dna');
var Solver = require('./solver');

// Conseguir datos de un usuario

function checkDNA(req, res){

    var dna = req.body.dna;
    if (dna == undefined){
        return res.status(404).send("Not dna provided");
    }
    var mutant = Solver.isMutant(dna)
    var toSave = new DNA({dna:dna, mutant:mutant})
    toSave.save()
    if (mutant){
        return res.send("OK");
    }
    return res.status(403).send("Forbidden");
}

module.exports = { 
    checkDNA : checkDNA
}