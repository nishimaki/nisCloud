
var http = require('http');
var path = require('path');
var socketio = require('socket.io');
var express = require('express');

// Http SocketIO設定
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser("hogehoge"));
  app.use(express.session({secret: 'fugafuga'}));
  app.use(app.router);
  // clientの静的ファイルを公開する
  app.use(express.static(path.resolve(__dirname, 'client')));

});

// SocketIO
var server = http.createServer(app);
var io = socketio.listen(server);

// NCMB
var NCMB = require("ncmb-latest.min").NCMB;
NCMB.initialize("51eb52bd757e683f478b83012e77cbe63625301882bbc4972b412eabc19b5fde", "fcb51d2e05594e10b0f47ef258a6db9b30ac061932cedd33cfa63e1a930377f4");

// 外部モジュールの読み込み
var appModule = require('./app_modules');
// TEST
var res = appModule.util.add(100,201);
console.log("res:" + res);
// var res = appModule.ncmb.TestClass();

// ユーザー初期処理
appModule.user.init(app, NCMB);
// チャット初期処理
appModule.chat.init(io);
// ポータル初期処理
appModule.portal.init(app);

//appModule.user.AddUser(NCMB);



// ルートの初期設定
app.get('/user/:id', function(req, res){
  console.log("get!!");
  res.send('user ' + req.params.id);
});

// Http起動
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
