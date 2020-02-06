const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// iniciando o app
const app = express()

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/models')

const Product = mongoose.model('Product')


// primeira rota
app.get('/', (req, res) => {
    Product.create({
        tittle: 'Geladeira Gamer',
        description: 'Jogue seus jogos em baixíssima temperatura',
        url: 'https://google.com/'
    })

    return res.send('Olá 😎')
})

app.listen(8080)

