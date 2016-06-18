angular.module('storeApp').directive('timeSnippet', function(){
    return {
        restrict: 'E',
        templateUrl: '../templates/time-snippet.html',
        controller: function ($scope, $interval) {
            $interval(function(){
                $scope.time = new Date();
            }, 500);
        }
    }
});