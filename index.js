// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos el módulo de mongoose para poder conectarnos a MongoDB
var mongoose = require('mongoose');

// *Cargamos el fichero app.js con la configuración de Express
var app = require('./app');
// Creamos la variable PORT para indicar el puerto en el que va a funcionar el servidor
var port = 3800;
// Le indicamos a Mongoose que haremos la conexión con Promesas
mongoose.Promise = global.Promise;
// Usamos el método connect para conectarnos a nuestra base de datos
const options = {
            native_parser: true,
            poolSize: 5,
            promiseLibrary: global.Promise,
            autoIndex: false, // Don't build indexes
            reconnectTries: 30, // Retry up to 30 times
            reconnectInterval: 500, // Reconnect every 500ms
            bufferMaxEntries: 0,
            connectWithNoPrimary: true,
            useNewUrlParser : true 
};

mongoose.connect('mongodb://mongo:27017/colon-aseguradora', options);
mongoose.connection.on('error', (err) => {      
    console.log("error " + err)
});
mongoose.connection.on('connected', () => {
    console.log('Connected to Server successfully! trying to connect ' + port);
    app.listen(port, function(data){
        console.log("servidor corriendo en http://localhost:" + port);
    });
    
});


    