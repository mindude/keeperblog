'use strict';

/**
 * @ngdoc function
 * @name keeperblogApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the keeperblogApp
 */
angular.module('keeperblogApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.LogCtrl = function(post){
      if (
        post == undefined||!post.username || !post.password
      ) {
        alert('Please fill out all form fields.');
        return false;
      }
      var log = $http.post('/users', post);

      log.success(function (data) {
        console.log(data); // <-- changed
      });


    };

    // Here we're creating some local references
    // so that we don't have to type $scope every
    // damn time
    var user,
      signup;

    // Here we're creating a scope for our Signup page.
    // This will hold our data and methods for this page.
    $scope.signup = signup = {};

    // In our signup.html, we'll be using the ng-model
    // attribute to populate this object.
    signup.user = user = {};


    // This is our method that will post to our server.
    signup.submit = function () {

      // make sure all fields are filled out...
      // aren't you glad you're not typing out
      // $scope.signup.user.firstname everytime now??
      if (
        !user.username || !user.password1 || !user.password2
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      // make sure the passwords match match
      if (user.password1 !== user.password2) {
        alert('Your passwords must match.');
        return false;
      }

      // Just so we can confirm that the bindings are working
      console.log(user);

      // Make the request to the server ... which doesn't exist just yet

      var request = $http.post('/signup', user);

      request.success(function (data) {
        console.log(data); // <-- changed
      });

      request.error(function (data) {
        console.log(data); // <-- changed
      })
    };
  });
