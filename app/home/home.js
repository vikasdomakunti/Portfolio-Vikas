'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', function ($scope) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        $scope.skillrate = [1,2,3,4,5,6,7,8,9,10];

        $scope.skillset = [
            {skill: 'Communication', rating: 8},
            {skill: 'Learning', rating: 8},
            {skill: 'Planning', rating: 8},
            {skill: 'Coding', rating: 5},
            {skill: 'Teamwork', rating: 8},
            {skill: 'Organization', rating: 8},
            {skill: 'UI Designing', rating: 8},
            {skill: 'Teaching', rating: 8},

        ];

    }]);