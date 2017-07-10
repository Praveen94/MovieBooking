'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mymoviesendpointCtrlStub = {
  index: 'mymoviesendpointCtrl.index',
  show: 'mymoviesendpointCtrl.show',
  create: 'mymoviesendpointCtrl.create',
  update: 'mymoviesendpointCtrl.update',
  destroy: 'mymoviesendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mymoviesendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './mymoviesendpoint.controller': mymoviesendpointCtrlStub
});

describe('Mymoviesendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(mymoviesendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/mymoviesendpoints', function() {

    it('should route to mymoviesendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'mymoviesendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/mymoviesendpoints/:id', function() {

    it('should route to mymoviesendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'mymoviesendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/mymoviesendpoints', function() {

    it('should route to mymoviesendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'mymoviesendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/mymoviesendpoints/:id', function() {

    it('should route to mymoviesendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'mymoviesendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/mymoviesendpoints/:id', function() {

    it('should route to mymoviesendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'mymoviesendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/mymoviesendpoints/:id', function() {

    it('should route to mymoviesendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'mymoviesendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
