const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema ({
    name: {type: String},
    email:{type: String},
    telephone: {type: String},
    password: {type: String},
    createdAt: {type: Date, default: Date.now}
});

UsuarioSchema.methods.encryptPassword = () => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UsuarioSchema.methods.comparePassword = function (password) {
    bcrypt.compareSync(password, this.password);
}

const Usuarios = mongoose.model('User', UsuarioSchema);

module.exports = Usuarios;