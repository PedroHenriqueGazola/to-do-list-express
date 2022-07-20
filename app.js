const express = require('express');

const app = express();

app.use(express.json());

const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log)

app.get('/', (req, res) => { // req = requisiçao / res = resposta
    res.send('<h1>Minha lista de tarefas</h1>')
});

app.get('/json', (req, res) => {  // enviando um json
    console.log(req.body)
    res.json({title: 'Tarefa X', done: true})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});