'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {

      $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
      };

}]);