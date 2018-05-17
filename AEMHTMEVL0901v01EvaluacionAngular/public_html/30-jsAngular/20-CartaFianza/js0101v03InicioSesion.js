/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
/*
var vApp = angular
                    .module('appCartaFianza', [])
                    .controller('myCtrl', function($scope){
                        $scope.vUsuario = "analista";
                        $scope.vPassword = "clave1";
                });
  */              
var iniciar = angular.module('appCartaFianza', []);
    //alert(iniciar.name);
    // alert(iniciar.controller);

    iniciar.controller('myCtrl', function($scope){
        alert($scope);
        $scope.vMensaje = "No hay error";
        $scope.vUsuario = "analista";
        $scope.vPassword="clave1";
        
        alert($scope.vMensaje);
        $scope.vFechaSistema = new Date().getFullYear();
        
        $scope.iniciar=function(){
          alert("boton iniciar")  ;
        };
    });
                