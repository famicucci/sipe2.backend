const express = require('express');
const router = express.Router();
const ClienteController = require('../../controllers/ClienteController');

router.get('/', ClienteController.traerClientes);
router.get('/:Email', ClienteController.traerCliente);
router.get('/client/:Id', ClienteController.getClient);
router.post('/', ClienteController.crearCliente);
router.put('/:Id', ClienteController.modificarCliente);
router.delete('/:Id', ClienteController.eliminarCliente);

module.exports = router;
