/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlmouseDown', function ($scope){
    
    $scope.imagenVisible = 0;
    
    $scope.buttonText = "Mouse to down see imagen";

    $scope.toggleImage =function(pValue){
        $scope.imagenVisible = pValue;
        $scope.buttonText = pValue==0 ? "Mousedown to see image ":"Mouseup to hide image"
    }
});


