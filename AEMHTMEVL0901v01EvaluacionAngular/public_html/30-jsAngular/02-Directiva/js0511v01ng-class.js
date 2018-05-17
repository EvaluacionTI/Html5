/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlClass', function ($scope){
    $scope.class1 = 'redClass';
    $scope.class2 = 'blueClass';
    
    $scope.toggleClass = function(pVal){
      if (pVal===0){
        $scope.class1 = 'original';
        $scope.class2 = 'original';          
      }else{
        $scope.class1 = 'redClass';
        $scope.class2 = 'blueClass';          
      }
    };
});


