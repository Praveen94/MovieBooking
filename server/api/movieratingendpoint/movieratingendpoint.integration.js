'use strict';

var app = require('../..');
import request from 'supertest';

var newMovieratingendpoint;

describe('Movieratingendpoint API:', function() {

  describe('GET /api/movieratingendpoints', function() {
    var movieratingendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieratingendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieratingendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(movieratingendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/movieratingendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/movieratingendpoints')
        .send({
          name: 'New Movieratingendpoint',
          info: 'This is the brand new movieratingendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMovieratingendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created movieratingendpoint', function() {
      expect(newMovieratingendpoint.name).to.equal('New Movieratingendpoint');
      expect(newMovieratingendpoint.info).to.equal('This is the brand new movieratingendpoint!!!');
    });

  });

  describe('GET /api/movieratingendpoints/:id', function() {
    var movieratingendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/movieratingendpoints/' + newMovieratingendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movieratingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      movieratingendpoint = {};
    });

    it('should respond with the requested movieratingendpoint', function() {
      expect(movieratingendpoint.name).to.equal('New Movieratingendpoint');
      expect(movieratingendpoint.info).to.equal('This is the brand new movieratingendpoint!!!');
    });

  });

  describe('PUT /api/movieratingendpoints/:id', function() {
    var updatedMovieratingendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/movieratingendpoints/' + newMovieratingendpoint._id)
        .send({
          name: 'Updated Movieratingendpoint',
          info: 'This is the updated movieratingendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMovieratingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMovieratingendpoint = {};
    });

    it('should respond with the updated movieratingendpoint', function() {
      expect(updatedMovieratingendpoint.name).to.equal('Updated Movieratingendpoint');
      expect(updatedMovieratingendpoint.info).to.equal('This is the updated movieratingendpoint!!!');
    });

  });

  describe('DELETE /api/movieratingendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/movieratingendpoints/' + newMovieratingendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when movieratingendpoint does not exist', function(done) {
      request(app)
        .delete('/api/movieratingendpoints/' + newMovieratingendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
