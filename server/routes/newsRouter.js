const Router = require('express');
const router = new Router();
const newsController = require('../controllers/newsController');


router.get('/', newsController.getAll);
router.get('/get', newsController.getById);
router.get('/count', newsController.getCountNews);
router.post('/', newsController.createNews);
router.post('/update', newsController.uodateNews);
router.post('/delete', newsController.deleteNews);

module.exports = router;