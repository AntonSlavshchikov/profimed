const Router = require('express');
const router = new Router();
const applicationFormController = require('../controllers/applicationFormController');


router.get('/', applicationFormController.getAll);
router.post('/', applicationFormController.createApplicationForm);
router.get('/get', applicationFormController.getById);
router.post('/update', applicationFormController.updateApplicationForm);
router.post('/delete', applicationFormController.deleteApplicationForm);

module.exports = router;