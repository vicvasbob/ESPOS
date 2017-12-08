var Cliente = require('./modelo/cliente');
var Producto = require('./modelo/producto');
var ControllerCliente = require ('./controllers/controllerCliente');
var ControllerProducto = require ('./controllers/controllerProducto');

module.exports = function(app) {

	// devolver todos los Cliente
	app.get('/api/cliente', ControllerCliente.getCliente);
	// Crear un nuevo Cliente
	app.post('/api/cliente', ControllerCliente.setCliente);
	// Modificar los datos de un Cliente
	app.put('/api/cliente/:cliente_id', ControllerCliente.updateCliente);
	// Borrar un Cliente
	app.delete('/api/cliente/:cliente_id', ControllerCliente.removeCliente);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};