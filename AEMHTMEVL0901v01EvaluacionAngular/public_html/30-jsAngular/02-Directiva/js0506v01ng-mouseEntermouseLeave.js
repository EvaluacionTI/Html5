/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlmouseEnter', function ($scope){
    
    $scope.mouseX = "undefined";
    $scope.mouseY = "undefined";

    $scope.mouseMoving = function(pEvent){
        $scope.mouseX = pEvent.pageX;
        $scope.mouseY = pEvent.pageY;
    };
});


