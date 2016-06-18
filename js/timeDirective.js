angular.module('storeApp').directive('timeSnippet', function(){
    return {
        restrict: 'E',
        templateUrl: '../templates/time-snippet.html'
        link: function (scope, element, attrs) {
            scope.time = getTime();
        }
    }
});