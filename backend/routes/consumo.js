const express = require('express');
const router = express.Router();
const consumoController = require('../controllers/consumoController');
const { uploadSingle } = require('../middleware/multer');


router.post('/', consumoController.crearConsumo);
router.get('/', consumoController.obtenerConsumos)
router.put('/:id', consumoController.actualizarConsumo)
router.get('/:id', consumoController.obtenerConsumo)
router.delete('/:id', consumoController.eliminarConsumo);

router.post('/upload', uploadSingle, consumoController.uploadCsv);

module.exports = router;