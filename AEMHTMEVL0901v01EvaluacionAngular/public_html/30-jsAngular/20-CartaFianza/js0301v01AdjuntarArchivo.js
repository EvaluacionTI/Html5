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
var iniciar = angular.module('myAppCartaFianza', []);
    //alert(iniciar.name);
    // alert(iniciar.controller);

    iniciar.controller('myControladorAdjuntar', function($scope){
        //alert($scope);
        $scope.vMensaje = "No hay error";
        
        // alert($scope.vMensaje);
        $scope.vFechaSistema = new Date().getFullYear();
        
//        $scope.iniciar=function(){
//          alert("boton iniciar")  ;
//        };
        $scope.aDataCargada = [
                    {tipodocumento: 'Pagaré', archivo: 'pagare.doc', comentario: 'pagare 01', checked: false},
                    {tipodocumento: 'Solicitud Carta Fianza', archivo: 'solicitud.doc', comentario: 'solicitud 01', checked: true},
                    {tipodocumento: 'Propuesta Crédito', archivo: 'propuesta.doc', comentario: 'propuesta 01', checked: false},
                    {tipodocumento: 'Ficha Literal', archivo: 'ficha.doc', comentario: 'ficha 01', checked: false},
                    {tipodocumento: 'Riesgos', archivo: 'riesgos.doc', comentario: 'riesgos 01', checked: false},
                    {tipodocumento: 'DNI', archivo: 'dni.img', comentario: 'dni 01', checked: false},
                    {tipodocumento: 'Contrato', archivo: 'contrato.pdf', comentario: 'contrato 01', checked: true}
            ];
            
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
                