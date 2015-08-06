/**
 * Created by Vikas on 5/14/15.
 */
'use strict';

angular.module('myApp.resume', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/resume', {
            templateUrl: 'resume/resume.html',
            controller: 'ResumeCtrl'
        });
    }])

    .controller('ResumeCtrl', ['$scope', function($scope) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        
    }]);