'use strict';

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const request = require('request')

const overrideContentType = function(req, res, next){
  if (req.headers['x-amz-sns-message-type']) {
      req.headers['content-type'] = 'application/json;charset=UTF-8'
  }
  next()
}

app.use(overrideContentType)
app.use(bodyParser.json())

app.get('/', function(req, res,next) {
    res.send({'Health': 'OK'})
});

app.post('/forward-event', function(req, res){
  if (req.headers['x-amz-sns-message-type'] === 'SubscriptionConfirmation'){
    request.get(req.body.SubscribeURL)
  } else {
    io.sockets.emit('event', req.body)
  }
  res.send({'Success': true})
})

server.listen(80)
