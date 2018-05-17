/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular
        .module('MyApp', []);

angular
        .module('MyApp')
        .service('SharedService', function(){
            return {vProducto: 'Carta Fianza'};
        });

angular
        .module('MyApp')
        .controller('MyPrimerControlador01', ['$scope', 'SharedService', function($scope, pSharedService){
                
                $scope.model = pSharedService;

}]);

angular
        .module('MyApp')
        .controller('MySegundoControlador02', ['$scope', 'SharedService', function($scope, pSharedService){
                
                $scope.model = pSharedService;

}]);

