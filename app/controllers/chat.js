module.exports.initChat = function(app, req, res){
	var dadosForm = req.body;

	req.assert('apelido', 'preencha o nome').notEmpty();
	req.assert('apelido', 'coloque mais que 3 caracteres').len(3, 15);

	var error = req.validationErrors();

	if(error){
		res.render('index', {validacao : error});
		return;
	}

	app.get('io').emit('msgParaCliente', {apelido : dadosForm.apelido, mensagem : 'entrou no chat'});
	res.render('chat', {dadosForm: dadosForm});
}