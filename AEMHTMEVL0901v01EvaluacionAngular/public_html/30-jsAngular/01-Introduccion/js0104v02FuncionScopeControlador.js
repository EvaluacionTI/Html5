/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
vAplicacion.controller('MyControladorScope', function($scope){
    
    $scope.vPrimerNombre = 'Isabel';
    $scope.vSegundoNombre = 'Díaz';
    
    $scope.setNombre = function($pNombre, $pSegundo){
        $scope.vPrimerNombre = $pNombre;
        $scope.vSegundoNombre = $pSegundo;
    };
});