const Router = require('express');
const {check} = require('express-validator');
const router = new Router();
const authController = require('../controllers/authController');
const authMidddleweare = require('../middleware/authMiddleweare');

router.post('/', authController.createUser);
router.post('/login', [
    check('password', 'Не верный пароль!').notEmpty(),
], authController.login);
router.get('/check', authMidddleweare ,authController.check);

module.exports = router;