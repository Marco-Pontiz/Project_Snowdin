const express = require('express');
const router = express.Router();
const path = require('path');
const Usuario = require('../models/usuario');
const passport = require('passport');

//rutas
router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/login', (req, res) => {
    res.render('login.html')
})

router.post('login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

router.get('/register', (req, res) => {
    res.render('register.html')
})

module.exports = router;