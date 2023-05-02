const express = require('express');
const path = require('path')

const app = express();

//setings
const PORT = 8080;
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));


//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public  '))
app.use(express.json());

//router
app.use('/', require('./backend/routes/index'));

const server = app.listen(PORT, () => {
    console.log(`El servidor está en linea! http://localhost:${PORT}`);
})
server.on("error", error => console.log(`Error al inicializar el servidor :( ... ${error}`));