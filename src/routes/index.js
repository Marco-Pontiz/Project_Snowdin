const express = require('express');
const router = express.Router();
const main =require('../correo');
const path = require('path');
const Usuarios = require('../models/usuario');
const passport = require('passport');

//rutas
router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/login', (req, res) => {
    res.render('login.html')
})

router.get('/register', (req, res) => {
    res.render('register.html')
})

router.post('/register', async(req, res) => {
    main();
    try{
        const { name, email, telephone, password } = req.body;
        const usuario = new Usuarios({ name, email, telephone, password });
        await usuario.save();
        res.status(201).json({ message: 'Usuario registrado!'});
    } catch (error) {
        res.status(400).json({ message: 'Error al registro', error })
    }
});

module.exports = router;