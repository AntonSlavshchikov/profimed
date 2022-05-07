const Router = require('express');
const router = new Router();

const newsRouter = require('./newsRouter');
const workersRouter = require('./workersRouter');
const typeServicesRouter = require('./typeServicesRouter');
const services = require('./servicesRouter');
const reviews = require('./reviewsRouter');
const vacancy = require('./vacancyRouter');
const documents = require('./documentsRouter');
const about = require('./aboutRouter');
const typeAbout = require('./typeAboutRouter');
const licenses = require('./licensesRouter');
const auth = require('./authRouter');

router.use('/news', newsRouter);
router.use('/workers', workersRouter);
router.use('/typeServices', typeServicesRouter);
router.use('/services', services);
router.use('/reviews', reviews);
router.use('/vacancy', vacancy);
router.use('/documents', documents);
router.use('/about', about);
router.use('/typeAbout', typeAbout);
router.use('/licenses', licenses);
router.use('/auth', auth);

module.exports = router;