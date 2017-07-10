'use strict';

var express = require('express');
var controller = require('./movieratingendpoint.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/search/:moviename', controller.searchmoviename);
// router.put('/addRating/:moviename', controller.addRating);
module.exports = router;
