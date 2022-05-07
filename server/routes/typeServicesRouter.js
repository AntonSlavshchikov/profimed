const Router = require('express');
const router = new Router();
const typeServicesController = require('../controllers/typeServicesController');


router.get('/', typeServicesController.getAll);
router.post('/', typeServicesController.createTypeServices);
router.get('/get', typeServicesController.getById);
router.post('/update', typeServicesController.updateTypeAbout);
router.post('/delete', typeServicesController.deleteTypeService);

module.exports = router;