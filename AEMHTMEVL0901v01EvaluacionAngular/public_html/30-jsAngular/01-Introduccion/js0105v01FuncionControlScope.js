/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
vAplicacion.controller('MyControladorControlScope', function($scope){
    
    $scope.aNumeroDatos = {
        vNumero1 : 1000,
        vNumero2 : 2000
    };
    
    $scope.dividir=function(pValor1, pValor2){
        window.alert(pValor1/pValor2);
    };
    
});