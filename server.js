const express = require ('express');

const server = express();

server.use(express.json());

//CRUD

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
    const { index } = req.body;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
})

server.listen(3000);
