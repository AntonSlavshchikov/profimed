const Router = require('express');
const router = new Router();
const typeAboutController = require('../controllers/typeAboutController');


router.get('/', typeAboutController.getAll);
router.post('/', typeAboutController.createTypeAbout);
router.get('/get', typeAboutController.getById);
router.post('/update', typeAboutController.updateTypeAbout);
router.post('/delete', typeAboutController.deleteTypeAbout);

module.exports = router;