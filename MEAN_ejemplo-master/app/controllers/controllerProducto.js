var Producto = require('../modelo/producto');


// Obtiene todos los objetos Producto de la base de datos
exports.getProducto = function (req, res){
	Producto.find(

		function(err, producto) {
			if (err)
				res.send(err)
					res.json(producto); // devuelve todas las producto en JSON
				}
			);
}

// Guarda un objeto producto en base de datos
exports.setProducto = function(req, res) {

		// Creo el objeto producto
    Producto.create(
			{nombre : req.body.nombre,	talla: req.body.talla, color: req.body.color},
			function(err, producto) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas los producto tras crear uno de ellos
                Producto.find(function(err, producto) {
				 	if (err)
				 		res.send(err)
				 	res.json(producto);
				});
			});

	}

// Modificamos un objeto producto de la base de datos
exports.updateProducto = function(req, res){
    Producto.update( {_id : req.params.producto_id},
					{$set:{nombre : req.body.nombre,	talla: req.body.talla, color: req.body.color}},
					function(err, producto) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las producto tras crear uno de ellos
                        Producto.find(function(err, producto) {
				 	if (err)
				 		res.send(err)
				 	res.json(producto);
				});
			});
	}

// Elimino un objeto producto de la base de Datos
exports.removeProducto = function(req, res) {
    Producto.remove({_id : req.params.cproducto_id}, function(err, producto) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas los producto tras borrar uno de ellos
        Producto.find(function(err, producto) {
				if (err)
					res.send(err)
				res.json(producto);
			});
		});
}