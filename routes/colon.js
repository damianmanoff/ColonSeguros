'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var MutantController = require('../controllers/mutant.js');
var StatController = require('../controllers/stats.js');
// Llamamos al router
var api = express.Router();
// Creamos una ruta para los métodos que tenemos en nuestros controladores

api.post('/mutant/', MutantController.checkDNA);
api.post('/stat/', StatController.getStats);
// Exportamos la configuración
module.exports = api;