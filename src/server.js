const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
dotenv.config();
require('./database.js');
require('../src/models/usuario.js')

//setings
const PORT = process.env.PORT || 3000;
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('src')); 
app.use(express.static('public'))
app.use(express.json());

//router
app.use('/', require('./routes/index'));

const server = app.listen(PORT, () => {
    console.log(`El servidor está en linea! http://localhost:${PORT}`);
})
server.on("error", error => console.log(`Error al inicializar el servidor :( ... ${error}`));