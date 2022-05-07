const Router = require('express');
const router = new Router();
const vacancyController = require('../controllers/vacancyController');


router.get('/', vacancyController.getAll);
router.get('/get', vacancyController.getById);
router.post('/', vacancyController.createVacancy);
router.post('/update', vacancyController.updateVacancy);
router.post('/delete', vacancyController.deleteVacancy);

module.exports = router;