const express = require('express');
const checklistRouter = require('./src/routes/checklist')
const rootRouter = require('./src/routes/index')
const path = require('path');
require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklists', checklistRouter);

app.get('/json', (req, res) => {  // enviando um json
    console.log(req.body)
    res.json({title: 'Tarefa X', done: true})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});