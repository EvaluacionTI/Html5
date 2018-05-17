/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlClick', function ($scope){
    
    $scope.vPrimerNombreClick = '';
    $scope.vSegundoNombreClick = '';
    
    $scope.setNombreClick = function($pNombre, $pSegundo){
        $scope.vPrimerNombreClick = $pNombre;
        $scope.vSegundoNombreClick = $pSegundo;
    };
    
});


