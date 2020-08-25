var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Eu sou Full Cycle')
})

app.listen(8080, function () {
    console.log('app rodando na porta 8080!')
})