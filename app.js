// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
// Llamamos a express para poder crear el servidor
var app = express();
// Importamos las rutas
var user_routes = require('./routes/colon'); 
//cargar middlewares
//un metodo que se ejecuta antes que llegue a un controlador
//Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(cors())
app.use(allowCrossDomain);
// Cargamos las rutas
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use('/', user_routes);
// exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;