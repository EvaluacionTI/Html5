/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlDblClick', function ($scope){
    
    $scope.value = 0;
    
    $scope.clickFunction = function(){
        window.alert("Ha pulsado un click");
    };

    $scope.doubleClickFunction = function(){
        window.alert("Ha pulsado doble click");
    };
    
});


