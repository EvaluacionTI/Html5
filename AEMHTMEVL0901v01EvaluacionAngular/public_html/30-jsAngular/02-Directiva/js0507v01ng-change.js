/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlChange', function ($scope){
    $scope.vResultado = "";
    
    $scope.testNombre = function(pNombre){
        var vDelta = 5 - pNombre.length;
        $scope.vResultado = vDelta;
        if (vDelta>0){
            $scope.vResultado = "Still missing" + vDelta + " letter(s).";
        }else{
            $scope.vResultado = "Word is valid.";
        }
    };
});


