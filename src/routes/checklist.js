const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('olá')
    res.send()
}); 
router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send()
});

module.exports = router; 