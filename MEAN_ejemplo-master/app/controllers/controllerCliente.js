var Cliente = require('../modelo/cliente');



// Obtiene todos los objetos Cliente de la base de datos
exports.getCliente = function (req, res){
	Cliente.find(

		function(err, cliente) {
			if (err)
				res.send(err)
					res.json(cliente); // devuelve todas las Clientes en JSON
				}
			);
}

// Guarda un objeto Cliente en base de datos
exports.setCliente = function(req, res) {

		// Creo el objeto Cliente
		Cliente.create(
			{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}, 
			function(err, cliente) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas los clientes tras crear uno de ellos
				Cliente.find(function(err, cliente) {
				 	if (err)
				 		res.send(err)
				 	res.json(cliente);
				});
			});

	}

// Modificamos un objeto Cliente de la base de datos
exports.updateCliente = function(req, res){
	Cliente.update( {_id : req.params.cliente_id},
					{$set:{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}}, 
					function(err, cliente) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las clientes tras crear uno de ellos
				Cliente.find(function(err, cliente) {
				 	if (err)
				 		res.send(err)
				 	res.json(cliente);
				});
			});
	}

// Elimino un objeto Cliente de la base de Datos
exports.removeCliente = function(req, res) {
	Cliente.remove({_id : req.params.cliente_id}, function(err, cliente) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas los clientes tras borrar uno de ellos
			Cliente.find(function(err, cliente) {
				if (err)
					res.send(err)
				res.json(cliente);
			});
		});
}