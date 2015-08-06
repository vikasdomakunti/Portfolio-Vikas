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
            {number: 1,name:'Chat messenger',description:'Developed Single server/ Multiple Client chat messenger over sockets using Java, Java Swings GUI'},
            {number: 2,name:'Ring election algorithm',description:'A mutli-thread application to implement ring election algorithm using Java'},
            {number: 3,name:'Project3',description:'Project 3 description'},
            {number: 4,name:'Project4',description:'Project 4 description'},
            {number: 5,name:'Project5',description:'Project 5 description'},

        ]
}]);