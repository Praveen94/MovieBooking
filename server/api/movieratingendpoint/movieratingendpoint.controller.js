/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movieratingendpoints              ->  index
 * POST    /api/movieratingendpoints              ->  create
 * GET     /api/movieratingendpoints/:id          ->  show
 * PUT     /api/movieratingendpoints/:id          ->  update
 * DELETE  /api/movieratingendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Movieratingendpoint from './movieratingendpoint.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Movieratingendpoints
export function index(req, res) {
  return Movieratingendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Movieratingendpoint from the DB
export function show(req, res) {
  return Movieratingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function searchmoviename(req, res) {
  return Movieratingendpoint.find({

      'MovieName':req.params.moviename
  })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}


// Creates a new Movieratingendpoint in the DB
export function create(req, res) {
  return Movieratingendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Movieratingendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Movieratingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// export function addRating(req, res) { //Adding Movie Rating
//   Movieratingendpoint.findOneAndUpdate({
//     Moviename: req.params.moviename
//   },
//
// {
//   $push: {
//     Rating:req.body.Rating
//   }
// },{
//     upsert: true
//   },
//   function(err, docs) {
//     if (err)
//  console.log('error occured');
//   else {
// res.status(200).json(docs);
// console.log(docs);
// }
// });
// }







// Deletes a Movieratingendpoint from the DB
export function destroy(req, res) {
  return Movieratingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
