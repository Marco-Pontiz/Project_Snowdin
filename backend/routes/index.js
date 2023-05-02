const express = require('express');
const path = require('path');
const router = express.Router();

router.get(`/`, (req, res) => {  
    res.sendFile(path.join(__dirname, '../../frontend/views/html/index.html'))
});

router.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/views/html/signup.html'))
})

module.exports = router