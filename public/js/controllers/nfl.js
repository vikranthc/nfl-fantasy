window.angular.module('ngff.controllers.nfl', [])
    .controller('NFLController',['$scope', 'Global', 'NFL',
        function($scope, Global, NFL){
            $scope.global = Global;
            $scope.nflteams = NFL.teams; 
        }]);