const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.get('/tags', userController.getAllTags);

module.exports = router;
