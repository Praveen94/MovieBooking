/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/moviemappingendpoints              ->  index
 * POST    /api/moviemappingendpoints              ->  create
 * GET     /api/moviemappingendpoints/:id          ->  show
 * PUT     /api/moviemappingendpoints/:id          ->  update
 * DELETE  /api/moviemappingendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Moviemappingendpoint from './moviemappingendpoint.model';

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

// Gets a list of Moviemappingendpoints
export function index(req, res) {
  return Moviemappingendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Moviemappingendpoint from the DB
export function show(req, res) {
  return Moviemappingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Moviemappingendpoint in the DB
export function create(req, res) {
  return Moviemappingendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}
//////////////////////////////////////
export function showtheatre(req, res) {
  return Moviemappingendpoint.find({
    'MovieName':req.params.moviename

  })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}
//////////////////////////////////////
// export function searchtheatre(req, res) {
//   return Moviemappingendpoint.find({
//     'Theatres':req.params.theatrename
//
//   })
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }
//////////////////////////////////////
export function gettheatre(req, res) {
  return Moviemappingendpoint.find({
    'City':req.params.cityname,
      'MovieName':req.params.moviename
  })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

//////////////////////////////////////
export function searchtheatre(req, res) { //Removing theatre
  Moviemappingendpoint.update({
    City: req.params.cityname
  },
  {
    '$pull':
  {
    "Theatres": req.params.theatrename
}
},
  function(err, docs) {
    if (err)
 console.log('error occured');
  else {
res.status(200).json(docs);
console.log(docs);
}
}
);
}

//////////////////////////////////////
// export function searchMovieMap(req, res) { //Removing MovieMapping
//   Moviemappingendpoint.remove({
//     MovieName: req.params.movieName
//   },
//   function(err, docs) {
//     if (err)
//  console.log('error occured');
//   else {
// res.status(200).json(docs);
// console.log(docs);
// }
// }
// );
// }



// Updates an existing Moviemappingendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Moviemappingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Moviemappingendpoint from the DB
export function destroy(req, res) {
  return Moviemappingendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
