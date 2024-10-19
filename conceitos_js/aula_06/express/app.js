const express = require('express')

const app = express()

msg = "<h1> Miau! </h1> <input type='email' placeholder='Insira seu email'/> <button>Entrar!</button> "

app.get('/', (req, res) => {
    res.send("Olá! Seja Mal Vindo!")
})

app.get('/login', (req, res) => {
    res.send(msg)
})

app.get('/user/:id/:nome', (req, res) => {
    res.send('id: ' + req.params.id)
})

app.listen(80, () => {
    console.log('rodando! http://localhost:80');
})
