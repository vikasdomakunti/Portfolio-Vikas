'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', ['$scope', function($scope) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    }]);
