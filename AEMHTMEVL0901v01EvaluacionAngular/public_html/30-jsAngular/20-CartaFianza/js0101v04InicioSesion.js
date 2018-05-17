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
        //alert($scope);
        $scope.vMensaje = "No hay error";
        
        // alert($scope.vMensaje);
        $scope.vFechaSistema = new Date().getFullYear();
        
//        $scope.iniciar=function(){
//          alert("boton iniciar")  ;
//        };
        
        $scope.iniciar = function(){
		alert("ingreso" + $('#idUsuario'));
                alert($("#idUsuario"));
                alert($("#idUsuario").val().length);
                
            if($("#idUsuario").val().length===0){
                    $("#idUsuario").focus();
                    return false;
            }

            if($("#idClave").val().length===0){
                    $("#idClave").focus();
                    return false;
            }

			// cargador.mostrarAcceder();
		/*	if($("#btnIniciar").data('esDetenido')=='1'){
				return ;
			} else {
				$("#acceder").data('esDetenido','1');
				$("#clave").val($.trim($("#clave").val()));
				logeo_acceder("false");
			}*/
        };
    });
                