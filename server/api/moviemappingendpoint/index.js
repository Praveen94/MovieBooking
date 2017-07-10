'use strict';

var express = require('express');
var controller = require('./moviemappingendpoint.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/showTheatre/:moviename',controller.showtheatre);
router.get('/show/:cityname/:moviename',controller.gettheatre);
router.put('/searchTheatre/:cityname/:theatrename',controller.searchtheatre);
// router.put('/searchMovieMap/:movieName',controller.searchMovieMap);
module.exports = router;
