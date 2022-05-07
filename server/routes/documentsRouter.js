const Router = require('express');
const router = new Router();
const documentsController = require('../controllers/documentsController');


router.get('/', documentsController.getAll);
router.get('/get', documentsController.getById);
router.post('/', documentsController.createDocument);
router.post('/update', documentsController.updateDocument);
router.post('/delete', documentsController.deleteDocument);

module.exports = router;