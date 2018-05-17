/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vPortal = angular.module('AppPortal', []);

vPortal.controller('CtrlNavegacion', function($scope){

    $scope.datos = {};

    $scope.compatiblidad = false;

    $scope.anho = new Date().getFullYear();
    $scope.haCargado = false;

    $scope.data = {};

    $scope.url = "";
    $scope.seccion = "Modulos"; // Modulos - Detalle - Perfil
    $scope.urlDetalle = "";
    $scope.urlPerfil = "";

    $scope.restaurarModulo = function(index){
        alert("index "  + index);
        $scope.data.modulos[index].activo = true;
        $scope.seccion = 'Modulos';
        $scope.urlDetalle = "revisando...";
        alert("Controlador");
        angular.element(document.querySelector('[ng-controller='+$scope.data.modulos[index].codigo+']')).scope().instanciar();
    };
    
});