var request = require('supertest');
var app = require('../app.js');

// Comprobar que la página de bienvenida al usuario se sirve correctamente
describe( "GET username", function() {
	it('should return HTML', function (done) {
		request(app)
  		.get('/user/isluji')
  		.expect('Content-Type', 'text/html; charset=utf-8')
  		.expect(200, done);
		}),
	it('should show username', function (done) {
  	request(app)
  		.get('/user/isluji')
  		.expect(200, "Bienvenido, <b>isluji</b>!!!", done);
	});
});

// Comprobar que el envío de la contraseña funciona correctamente
describe( "PUT password", function() {
	it('should check password', function (done) {
  	request(app)
  		.put('/user/isluji/passeito')
  		.expect('Content-Type', /text/)
  		.expect(200, "Hola, <b>isluji</b>!!! ¿Seguro que tu contrasena es <b>passeito</b>?", done);
	});
});
