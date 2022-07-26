const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklist');

router.get('/', async(req, res) => {
    try {
        const checklists = await Checklist.find({});
        res.status(200).render('checklists/index', { checklists: checklists });
    }catch(err){
        res.status(500).render('pages/error', { error: 'Erro ao exibir as listas' });
    }
}); 
router.get('/new', async(req, res) => {
    try {
        const checklists = new Checklist()
        res.status(200).render('checklists/new.ejs', { checklists: checklists });
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao carregar formulario' });
    }
})
router.post('/', async(req, res) => {
    const { name } = req.body.checklist;
    const checklist = new Checklist({ name });
    try {
        await checklist.save();
        res.redirect(`/checklists`)
    }catch (err) {
        res.status(422).render('checklists/new', { checklists: {...checklist, err}});
    }
}) // Post serve para criar um registro

router.get("/:id", async(req, res) => {
    try{
        const checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklists/show', { checklist: checklist });
    }catch(err){
        res.status(500).render('pages/error', { error: 'Erro ao exibir as listas de tarefas' });
    }
    
}) // get serve para buscar informações

router.put("/:id", async(req, res) => {
    let { name } = req.body;
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true});
        res.status(200).json(checklist);
    } catch (error) {
        res.status(422).json(error);
    }
}) // put serve para atualizar informações
router.delete("/:id", async(req, res) => {
    let { name } = req.body;
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).json(checklist);
    } catch (error) {
        
    }
}) // delete serve para deletar informações
module.exports = router;

