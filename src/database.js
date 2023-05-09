const mongoose = require('mongoose');
const { mongodb } = require('./key');

mongoose.connect(mongodb.URI_ATLAS, {useNewUrlParser: true}) 
    .then(db => console.log('La base de datos está conectada'))
    .catch(err => console.error(err));