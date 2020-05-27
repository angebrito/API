const express = require ('express');

const server = express();

server.use(express.json());

//CRUD

//MIDDLEWARES (FUNÇÃO QUE RECEBE OS PARAMETROS E FAZ MODIFICAÇÕES)
server.use((req, res, next) => {
    console.log(`Método: ${req.method}`);
    return next();
})

//GET

const users = ['Angelica', 'Yusi', 'Freya'];

server.get('/users', (req, res) => {
    return res.json(users);
})

server.get ('/users/:index', (req, res) =>  {
    const {index} = req.params;

    return res.json(users[index]);
})

//POST (CRIAÇÂO)

server.post('/users', (req, res) => {
    const { name } = req.body;
    
    users.push(name);
    
    return res.json(users);
})


//PUT (EDIÇÂO)

server.put('/users/:index', (req, res ) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

//DELETE

server.delete('/users/:index', (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    
    return res.json(users);
})

server.listen(3000);
