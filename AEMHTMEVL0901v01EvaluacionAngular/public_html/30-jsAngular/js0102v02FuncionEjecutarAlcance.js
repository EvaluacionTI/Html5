/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular.module('MyApp', []);
angular.module('MyApp').controller('MyControlador', ['$scope', function($scope){
        var vItems = ['Platano', 'Naranja', 'Manzana', 'Tuna', 'Mandarina'];
        
        $scope.itemIndex = null;
        $scope.currentItem = '';
        
        $scope.getFruta = function(){
            $scope.currentItem = vItems[$scope.itemIndex];
        };
}]);

