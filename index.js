'use strict';

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', function(req, res,next) {
    res.send({'Health': 'OK'})
});

app.post('/forward-event', function(request, response){
  io.sockets.emit('event', request.body)
  response.send({'Success': true})
})

server.listen(80)
