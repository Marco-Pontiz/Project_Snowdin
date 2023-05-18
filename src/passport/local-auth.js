const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('brcyptjs');
const Usuario = require('../models/usuario');

passport.serializeUser(async (id, done) => {
    try {
        const usuario = await Usuario.findById(id);
        done(null, usuario);
    } catch (error) {
        done(error);
    }
});

passport.use('local-signup', new LocalStrategy ({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const usuario = new Usuario();
    usuario.name = req.body.name,
    usuario.email = req.body.email,
    usuario.telephone = req.body.telephone,
    usuario.password = bcrypt.hashSync(req.body.password, 10),
    await usuario.save()
    done(null, usuario);
}));