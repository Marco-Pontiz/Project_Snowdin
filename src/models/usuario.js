const mongoose = require('mongoose');
const brcypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    telephone: String,
    password: String
});

usuarioSchema.methods.encryptPassword = () => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usuarioSchema.methods.comparePassword = function (password) {
    bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('usuario', usuarioSchema);