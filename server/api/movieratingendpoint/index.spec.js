'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var movieratingendpointCtrlStub = {
  index: 'movieratingendpointCtrl.index',
  show: 'movieratingendpointCtrl.show',
  create: 'movieratingendpointCtrl.create',
  update: 'movieratingendpointCtrl.update',
  destroy: 'movieratingendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var movieratingendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './movieratingendpoint.controller': movieratingendpointCtrlStub
});

describe('Movieratingendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(movieratingendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/movieratingendpoints', function() {

    it('should route to movieratingendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'movieratingendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/movieratingendpoints/:id', function() {

    it('should route to movieratingendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'movieratingendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/movieratingendpoints', function() {

    it('should route to movieratingendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'movieratingendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/movieratingendpoints/:id', function() {

    it('should route to movieratingendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'movieratingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/movieratingendpoints/:id', function() {

    it('should route to movieratingendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'movieratingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/movieratingendpoints/:id', function() {

    it('should route to movieratingendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'movieratingendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
