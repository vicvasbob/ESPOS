var mongoose = require('mongoose');

module.exports = mongoose.model('Producto', {
    nombre: String,
    talla: String,
    color: String
});

