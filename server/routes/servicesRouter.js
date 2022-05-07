const Router = require('express');
const router = new Router();
const servicesController = require('../controllers/servicesController');


router.get('/', servicesController.getAll);
router.get('/get', servicesController.getById);
router.post('/', servicesController.createServices);
router.post('/update', servicesController.updateServices);
router.post('/delete', servicesController.deleteService);

module.exports = router;