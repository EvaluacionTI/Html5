/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
alert("llego");
var iniciar = angular.module('myAppCartaFianza', []);
    //alert(iniciar.name);
    // alert(iniciar.controller);

    iniciar.controller('myCtrlInicioSesion', function($scope){
        alert($scope);
        $scope.vMensaje = "";
        $scope.vUsuario = "carta";
        $scope.vClave="carta";
        
        $scope.vFechaSistema = new Date().getFullYear();
        
        $scope.iniciar=function(){
          alert("boton iniciar")  ;
        };
    });

/*
$(document).ready(function(){
	aler("dom");
	if(esVersionSoportada()){
		
		$("#vUsuario").keypress(function(event){ // Filtrar x buscar
			if (event.keyCode === 10 || event.keyCode === 13){
				if($.trim($(this).val())===""){
					$(this).val("");
					$("#usuario").focus();
				} else {
					$(this).val($.trim($(this).val()));
					$("#clave").focus();
				}
				return false;
			}
		});
		
		$("#vClave").keypress(function(event){ // Filtrar x buscar
			if (event.keyCode === 10 || event.keyCode === 13){
				if($.trim($(this).val())===""){
					$(this).val("");
					$("#vClave").focus();
				} else {
					$(this).val($.trim($(this).val()));
					$("#btnIniciar").click();
				}
				return false;
			}
		});
		
		$("#btnIniciar").data('esDetenido','0');
		$("#vUsuario").focus();
	
	} else {
		location.href = "errorNavegador.html";
	}
	
	var centrar = function(){
		var objLog = $("#idIniciarSesionDiv");
		objLog.css("left",Math.floor(($(window).width()-objLog.width())/2)+"px");
		objLog.css("top",(Math.floor(($(window).height()-objLog.height())/2)+23)+"px");
	};
	
	$(window).resize(function() {
		centrar();
	});
	
	centrar();
	
});


function esVersionSoportada(){
	var esVersion = true;
	
	if($.browser.msie){
		if($.browser.msie){
			if(Number($.browser.version)<9){
				esVersion = false;
			}
		}
	}
	 var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

	    if (isChrome) {
	    	esVersion = true;
	    }else{
	    	esVersion = false;
	    }	
	
	
	
	return esVersion;
}

*/