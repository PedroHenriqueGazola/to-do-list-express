const express = require('express');
const checklistRouter = require('./src/routes/checklist')

const app = express();

app.use(express.json());
app.use('/checklists', checklistRouter);

app.get('/json', (req, res) => {  // enviando um json
    console.log(req.body)
    res.json({title: 'Tarefa X', done: true})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});