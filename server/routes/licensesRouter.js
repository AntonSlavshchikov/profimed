const Router = require('express');
const router = new Router();
const licensesController = require('../controllers/licensesController');


router.get('/', licensesController.getAll);
router.post('/', licensesController.createLicenses);
router.get('/get', licensesController.getById);
router.post('/delete', licensesController.deleteLicenses);
router.post('/update', licensesController.uodateLicenses);
module.exports = router;