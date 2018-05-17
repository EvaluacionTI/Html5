/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular.module('MyApp', []);
angular.module('MyApp').controller('MyControlador', ['$scope', '$interval', function($scope, $interval){
        var vItems = ['Platano', 'Naranja', 'Manzana', 'Tuna', 'Mandarina'];
        
        $scope.randomValue = -999;
        $scope.fruta = vItems;
        $scope.cantidad = 100;
        $scope.costo = 3.286;
        $scope.ancho = 100;
        
        $interval(function(){
            $scope.randomValue = Math.round(Math.random()*1000000);
        }, 2000); // 2000 son milisegundos equivalente a 2 segundos
        
}]);

