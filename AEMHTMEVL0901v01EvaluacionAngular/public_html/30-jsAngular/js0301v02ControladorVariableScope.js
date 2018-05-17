/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular.module('MyApp', []);

angular.module('MyApp').controller('MyPadreControlador', ['$scope', function($scope){
        $scope.model = {
            padre : 'Cash Management'
        };

//        $scope.padre = 'Carta Fianza';
}]);

angular.module('MyApp').controller('MyPrimerControlador', ['$scope', function($scope){
        $scope.model = {
            padre : 'Carta Fianza'
        };

//        $scope.padre = 'Carta Fianza';
}]);

angular.module('MyApp').controller('MySegundoPadreControlador', ['$scope', function($scope){
        $scope.model = {
            padre : 'Carta Crédito'
        };

}]);

