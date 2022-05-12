const Router = require('express');
const router = new Router();
const reviewsController = require('../controllers/reviewsController');


router.get('/', reviewsController.getAll);
router.get('/get', reviewsController.getById);
router.get('/count', reviewsController.getCountReviews);
router.post('/', reviewsController.createReview);
router.post('/update', reviewsController.updateReview);
router.post('/delete', reviewsController.deleteReview);

module.exports = router;