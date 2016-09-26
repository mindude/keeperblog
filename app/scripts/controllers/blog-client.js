/**
 * @ngdoc function
 * @name keeperblogApp.controller:BlogClientCtrl
 * @description
 * # BlogClientCtrl
 * Controller of the keeperblogApp
 */
angular.module('keeperblogApp')
  .controller('BlogClientCtrl', function ($scope, $http) {
    $scope.PostCtrl = function(post){

      if (
        !post.username || !post.title || !post.content
      ) {
        alert('Please fill out all form fields.');
        return false;
      }

      var thread = {
        username: post.username,
        title: post.title,
        content: post.content
      };

      var request = $http.post('/createthread', thread);

      request.success(function (data) {
        console.log(data); // <-- changed
      });

      request.error(function (data) {
        console.log(data); // <-- changed
      })

    };
    var test;
    $scope.display = function(){
      $http.get('/threads').then(function(result){
        test = result;
        console.log(test);
        $scope.posts = result.data;
      });
    };
  });
