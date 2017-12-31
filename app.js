/* importar config servidor*/
var app = require('./config/config');

/* parametrizar a porta */
app.listen(80, function(){
	console.log("on");
});