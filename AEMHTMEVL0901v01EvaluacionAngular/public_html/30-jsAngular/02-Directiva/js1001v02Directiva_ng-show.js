/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vApp = angular
        .module('appCartaFianza', [])
        .controller('myCtrlx', function($scope){
            $scope.vUsuario = "Carta";
            $scope.vPassword = "Fianza";
            $scope.vMostrar=false;
});