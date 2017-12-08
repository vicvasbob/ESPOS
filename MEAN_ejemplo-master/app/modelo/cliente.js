var mongoose = require('mongoose');

module.exports = mongoose.model('Cliente', {
	nombre: String,
	apellido: String,
	edad: String
});

