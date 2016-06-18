/**
 * Created by matthigbee on 6/18/16.
 */
angular.module('storeApp').directive('sendTo', function(){
   return {
       restrict: 'A',
       controller: function ($scope) {
           console.log($scope);
       },
       link: function(scope, elem, attrs){
           console.log(attrs.sendTo);
           console.log(elem);
           elem.on('click', function() {
               window.location = attrs.sendTo;
           });
       }
   }
});