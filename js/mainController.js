/**
 * Created by matthigbee on 6/18/16.
 */
angular.module('storeApp').controller('mainController', function($scope){
    $scope.products = [
        {
            name: 'Sandals',
            url: '/sandals.html',
            src: 'http://images.anthropologie.com/is/image/Anthropologie/39103973_041_b'
        },
        {
            name: 'Ring',
            url: '/ring.html',
            src: 'http://images.anthropologie.com/is/image/Anthropologie/36612836_070_b'
        }
    ]


});