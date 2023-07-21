const Router = require('express');
const router = new Router();
const TagController = require('../controller/tagController');

router.get('/getAll', TagController.getAll);

module.exports = router;
