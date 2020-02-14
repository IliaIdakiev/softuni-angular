const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.causes.get);

router.get('/:id', controllers.causes.get);

router.post('/', auth(), controllers.causes.post);

router.put('/:id', auth(), controllers.causes.put);

router.delete('/:id', auth(), controllers.causes.delete);

module.exports = router;