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
    const usuario = new Usuario({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    
    try {
        await usuario.save();
        done(null, usuario);
    } catch (error) {
        done(error);
    }
}));
