const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    name: {type: String},
    email:{type: String},
    telephone: {type: String},
    password: {type: String},
    createdAt: {type: Date, default: Date.now}
});

const Usuarios = mongoose.model('User', UsuarioSchema);

module.exports = Usuarios;