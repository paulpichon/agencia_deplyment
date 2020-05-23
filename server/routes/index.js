const express = require('express');
const router = express.Router();

//CONTROLADORES
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesControllers = require('../controllers/viajesController');
const testimonialesControllers = require('../controllers/testimonialesController');

module.exports = function() {

     router.get('/', homeController.consultasHomePage);
     router.get('/nosotros', nosotrosController.infoNosotros);
     router.get('/viajes', viajesControllers.mostrarViajes);
     router.get('/viajes/:id', viajesControllers.mostrarViaje);
     router.get('/testimoniales', testimonialesControllers.mostrarTestimoniales);
     //mandar datos por POST cuando se llena el formulario
     router.post('/testimoniales', testimonialesControllers.agregarTestimonial)

     return router;

}