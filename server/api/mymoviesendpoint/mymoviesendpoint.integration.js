'use strict';

var app = require('../..');
import request from 'supertest';

var newMymoviesendpoint;

describe('Mymoviesendpoint API:', function() {

  describe('GET /api/mymoviesendpoints', function() {
    var mymoviesendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/mymoviesendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mymoviesendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(mymoviesendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/mymoviesendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/mymoviesendpoints')
        .send({
          name: 'New Mymoviesendpoint',
          info: 'This is the brand new mymoviesendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMymoviesendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created mymoviesendpoint', function() {
      expect(newMymoviesendpoint.name).to.equal('New Mymoviesendpoint');
      expect(newMymoviesendpoint.info).to.equal('This is the brand new mymoviesendpoint!!!');
    });

  });

  describe('GET /api/mymoviesendpoints/:id', function() {
    var mymoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/mymoviesendpoints/' + newMymoviesendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mymoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      mymoviesendpoint = {};
    });

    it('should respond with the requested mymoviesendpoint', function() {
      expect(mymoviesendpoint.name).to.equal('New Mymoviesendpoint');
      expect(mymoviesendpoint.info).to.equal('This is the brand new mymoviesendpoint!!!');
    });

  });

  describe('PUT /api/mymoviesendpoints/:id', function() {
    var updatedMymoviesendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/mymoviesendpoints/' + newMymoviesendpoint._id)
        .send({
          name: 'Updated Mymoviesendpoint',
          info: 'This is the updated mymoviesendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMymoviesendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMymoviesendpoint = {};
    });

    it('should respond with the updated mymoviesendpoint', function() {
      expect(updatedMymoviesendpoint.name).to.equal('Updated Mymoviesendpoint');
      expect(updatedMymoviesendpoint.info).to.equal('This is the updated mymoviesendpoint!!!');
    });

  });

  describe('DELETE /api/mymoviesendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/mymoviesendpoints/' + newMymoviesendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mymoviesendpoint does not exist', function(done) {
      request(app)
        .delete('/api/mymoviesendpoints/' + newMymoviesendpoint._id)
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
