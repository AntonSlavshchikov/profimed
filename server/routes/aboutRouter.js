const Router = require('express');
const router = new Router();
const aboutController = require('../controllers/aboutController');


router.get('/', aboutController.getAll);
router.post('/', aboutController.createAbout);
router.get('/get', aboutController.getById);
router.post('/update', aboutController.updateAbout);
router.post('/delete', aboutController.deleteAbout);

module.exports = router;