/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

vAplicacion.factory('Compartido', function(){
    return {SharedMensaje:'Está compartido'};
});

vAplicacion.controller('MyCtrlCompartirA', function($scope, Compartido){
    
    $scope.valorA = "Carta Fianza";
    // $scope.valorCompartidoA = "Controlador A - Carta Fianza"
    $scope.valorCompartido = Compartido;
});

vAplicacion.controller('MyCtrlCompartirB', function($scope, Compartido){
    
    $scope.valorB = "Cash Management";
    // $scope.valorCompartidoB = "Controlador B - Cash Management"
    $scope.valorCompartido = Compartido;
});

