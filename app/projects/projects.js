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

        $scope.projects=[
            {number: 1,name:'Project1',description:'Project 1 description'},
            {number: 2,name:'Project2',description:'Project 2 description'},
            {number: 3,name:'Project3',description:'Project 3 description'},
            {number: 4,name:'Project4',description:'Project 4 description'},
            {number: 5,name:'Project5',description:'Project 5 description'},

        ]
}]);