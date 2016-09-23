'use strict';

describe('Controller: BlogAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('keeperblogApp'));

  var BlogAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogAdminCtrl = $controller('BlogAdminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogAdminCtrl.awesomeThings.length).toBe(3);
  });
});
