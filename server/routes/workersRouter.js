const Router = require('express');
const router = new Router();
const workersController = require('../controllers/workersController');


router.get('/', workersController.getAll);
router.get('/get', workersController.getById);
router.post('/', workersController.createWorkers);
router.post('/update', workersController.updateWorkers);
router.post('/delete', workersController.deleteWorker);

module.exports = router;