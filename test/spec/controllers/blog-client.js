'use strict';

describe('Controller: BlogClientCtrl', function () {

  // load the controller's module
  beforeEach(module('keeperblogApp'));

  var BlogClientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogClientCtrl = $controller('BlogClientCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogClientCtrl.awesomeThings.length).toBe(3);
  });
});
