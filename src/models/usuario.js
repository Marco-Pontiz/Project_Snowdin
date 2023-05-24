const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    name: {type: String},
    email:{type: String},
    telephone: {type: String},
    password: {type: String},
    createdAt: {type: Date, default: Date.now}
});

UsuarioSchema.methods.encryptPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

UsuarioSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const Usuarios = mongoose.model('User', UsuarioSchema);

module.exports = Usuarios;