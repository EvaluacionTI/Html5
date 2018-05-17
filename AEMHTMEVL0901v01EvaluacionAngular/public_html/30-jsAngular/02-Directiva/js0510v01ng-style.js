/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlStyle', function ($scope){
    $scope.style1 = {color:'blue'};
    $scope.style2 = {color:'yellow'};
    
    $scope.toggleClick = function(pVal){
        if (pVal===0){
            $scope.style1={};
            $scope.style2={};
        }else{
            $scope.style1={color:'green'};
            $scope.style2={color:'brown'};
        }
    };
});


