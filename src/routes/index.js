const express = require('express');
const router = express.Router();
const path = require('path');

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

module.exports = router;