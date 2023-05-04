const express = require('express');
const router = express.Router();
const path = require('path');

//rutas
router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/signup', (req, res) => {
    res.render('signup.html')
})

module.exports = router;