var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('views/control.html');
});

app.post('/next', function(req, res){
  console.log('NEXT!');
  io.sockets.emit('change', 'next');
  res.send('ok!');
});

app.post('/previous', function(req, res){
  console.log('BACK!');
  io.sockets.emit('change', 'previous');
  res.send('ok!');
});

http.listen(3000, function(){
  console.log('Started on port 3000');
});

io.on('connection', function(socket){
  console.log('Slideshow connected!');
});