/* importar config servidor*/
var app = require('./config/config');

/* parametrizar a porta */
var server = app.listen(80, function(){
	console.log("sss");
});

var io = require('socket.io').listen(server);
app.set('io', io);

/*criar a conexao com websockt */
io.on('connection', function(socket){
	socket.on('disconnect', function(){
	});

	socket.on('msgParaServer', function(data){
		socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
		
		socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

		if(parseInt(data.apelido_atualizado) == 0){
			socket.emit('ParticipantesParaCliente', {apelido: data.apelido});
		
			socket.broadcast.emit('ParticipantesParaCliente', {apelido: data.apelido});		
		}
	});
});

//teste