const Router = require('express');
const router = new Router();
const tagsRouter = require('./tagRouter');

router.use('/tag', tagsRouter);

module.exports = router;
