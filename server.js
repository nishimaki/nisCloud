var http = require('http');
var path = require('path');

var socketio = require('socket.io');
var express = require('express');

// 外部モジュールの読み込み
var appModule = require('./app_modules');
// TEST
var res = appModule.util.add(100,201);
console.log("res:" + res);

// Http SocketIO設定
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.resolve(__dirname, 'client')));

});

// SocketIO
var server = http.createServer(app);
var io = socketio.listen(server);

// チャット初期処理
appModule.chat.init(io);

// ポータル初期処理
appModule.portal.init(app);


app.get('/user/:id', function(req, res){
  console.log("get!!");
  res.send('user ' + req.params.id);
});

// Http起動
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});