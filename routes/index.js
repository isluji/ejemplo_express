var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Funciones asociadas a una ruta con variables
router.get('/user/:username', function (req, res) {
	res.send( "Bienvenido, <b>" + req.params.username + "</b>!!!");
});

router.put('/user/:username/:password', function (req, res) {
	res.send( "Hola, <b>" + req.params.username + "</b>!!! ¿Seguro que tu contrasena es <b>" + req.params.password + "</b>?");
});

module.exports = router;
