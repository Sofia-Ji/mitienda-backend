const express = require('express');
const router = express.Router();
const ctrCliente = require('../controllers/ctrCliente');

router.post('/cliente',ctrCliente.guardar);             //Create
router.get('/cliente',ctrCliente.listar);               //Read
router.get('/cliente/id/:id', ctrCliente.buscarId);     //Read
router.get('/cliente/nom/:nom', ctrCliente.buscarNom);  //Read
router.put('/cliente', ctrCliente.actualizar)
router.delete('/cliente/:id', ctrCliente.eliminar);       //delete                                                                                                

module.exports = router;