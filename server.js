const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Olá 😁')
})

app.listen(8080)

