/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/mymoviesendpoints              ->  index
 * POST    /api/mymoviesendpoints              ->  create
 * GET     /api/mymoviesendpoints/:id          ->  show
 * PUT     /api/mymoviesendpoints/:id          ->  update
 * DELETE  /api/mymoviesendpoints/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Mymoviesendpoint from './mymoviesendpoint.model';

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

// Gets a list of Mymoviesendpoints
export function index(req, res) {
  return Mymoviesendpoint.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Mymoviesendpoint from the DB
export function show(req, res) {
  return Mymoviesendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Mymoviesendpoint in the DB
export function create(req, res) {
  return Mymoviesendpoint.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

////////////////////////////////////////

export function searchmovie(req, res) {
  return Mymoviesendpoint.find({
    'Title':req.params.title,
    'Year':req.params.year
  })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}


////////////////////////////////////////
// Updates an existing Mymoviesendpoint in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Mymoviesendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
//////////////////////////////////////////
export function statusupdate(req, res) { //Updating Movie Status
  Mymoviesendpoint.findOneAndUpdate({
    Title: req.params.title
  },
  {
    $set: {
      Status: req.body.Status
    }
  },{
    upsert: true
  },
  function(err, docs) {
    if (err)
 console.log('error occured');
  else {
res.status(200).json(docs);
console.log(docs);
}
});
}

/////////////////////////////////////
// Deletes a Mymoviesendpoint from the DB
export function destroy(req, res) {
  return Mymoviesendpoint.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
