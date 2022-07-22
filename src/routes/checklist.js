const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('olá')
    res.send()
}); 
router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send()
}); // Post serve para criar um registro

router.get("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
}) // get serve para buscar informações

router.put("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
}) // put serve para atualizar informações
router.delete("/:id", (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
}) // delete serve para deletar informações
module.exports = router; 