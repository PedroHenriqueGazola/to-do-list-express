const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('olá')
    res.send()
}); 

module.exports = router; 