/* importar config servidor*/
var app = require('./config/config');

/* parametrizar a porta */
var server = app.listen(80, function(){
	console.log("onlineee");
});

var io = require('socket.io').listen(server);

/*criar a conexao com websockt */
io.on('connection', function(socket){
	socket.on('disconnect', function(){
	});
});