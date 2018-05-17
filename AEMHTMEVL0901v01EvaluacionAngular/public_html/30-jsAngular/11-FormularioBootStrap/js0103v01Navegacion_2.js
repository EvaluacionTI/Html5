/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vPortal = angular.module('AppPortal', ['core','ui.bootstrap','drahak.hotkeys']);

vPortal.controller('CtrlPrincipal', function($scope, $http, $timeout, $modal, datepickerPopupConfig){

    console.log("scope " + $scope);
        console.log("HTTP " + $http);
            console.log("TIMEOUT " + $timeout);
                console.log("MODAL " + $modal);
    console.log("DATEPICKER " + datepickerPopupConfig);
    
    $scope.datos = {};

    $scope.compatiblidad = false;

    $scope.$on('templateError', function(e, data) {
            $scope.templateError = true;
            $scope.templateErrorUrl = data.url;
    });
    
    datepickerPopupConfig.closeText = 'Cerrar';
    datepickerPopupConfig.currentText = 'Hoy';
    datepickerPopupConfig.clearText = 'Limpiar';

    $scope.fecha = {
        formato : "dd/MM/yyyy",
        abierto : {},
        abrir : function($event,tipo) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.fecha.abierto[tipo] = true;
        }
    };

    $scope.anho = new Date().getFullYear();
    $scope.haCargado = false;

    var iconoModulo = {
            "tare": "glyphicon glyphicon-check",
            "nuev": "glyphicon glyphicon-play",
            "soli": "glyphicon glyphicon-flag",
            "mant": "glyphicon glyphicon-cog",
            "repo": "glyphicon glyphicon-print"
    };

    $scope.data = {};

    $scope.texto = {
            url : {
                    plantillaPortal : hostname+"/20-CartaFianza/portal/plantillas/",
                    desconectar : hostname+texto.url.desconectar
            }
    };

    $scope.url = "";
    $scope.seccion = "Modulos"; // Modulos - Detalle - Perfil
    $scope.urlDetalle = "";
    $scope.urlPerfil = "";

    $scope.restaurarModulo = function(index){
        console.log("index"  + index);
        $scope.data.modulos[index].activo = true;
        $scope.seccion = 'Modulos';
        $scope.urlDetalle = "";
        console.log("index restaurar.modulos" + index);
        console.log('[ng-controller='+$scope.data.modulos[index].codigo+']');
        angular.element(document.querySelector('[ng-controller='+$scope.data.modulos[index].codigo+']')).scope().instanciar();
    };

    $scope.cargarModulo = function(index){
        $scope.seccion = "Modulos";
        $scope.urlDetalle = "";
        if(typeof(index)!="undefined" && index!=null){
                $scope.data.modulos[index].activo = true;
        }
    };

    $scope.tiempo = {
        contador : 0,
        segundo : 0,
        maximo : 30*60,
        mensaje : "",
        
        progreso : function(){
            if($scope.tiempo.segundo<$scope.tiempo.maximo){
                $scope.tiempo.contador = Math.floor(($scope.tiempo.segundo/$scope.tiempo.maximo)*100);
                $scope.tiempo.getMensaje();
                $scope.tiempo.segundo++;
                $timeout( function(){ $scope.tiempo.progreso(); }, 1000);
            } else { 
                console.log("Alerta x contador");
                location.href = $scope.texto.url.desconectar;
            }
        },
        getMensaje : function(){
            var segundoActual = $scope.tiempo.maximo-$scope.tiempo.segundo;
            var segundos = segundoActual%60;
            var minutos = (segundoActual-segundos)/60;
            $scope.tiempo.mensaje = minutos+":"+(segundos<10?"0"+segundos:segundos);
        }
    };
                
    $scope.alertaPortal = {
        mensaje : "alerta Portal",
        tipo : "success",
        cerrar : function(){
                $(".ALERTA_CONTENEDOR").fadeOut(function(){
                    $scope.alertaPortal.mensaje = "";
                });
        },
        mostrar : function(mensaje,seCierra){
                this.tipo = "success";
                this._mostrar(mensaje, seCierra);
        },
        mostrarError : function(mensaje,seCierra){
                this.tipo = "danger";
                this._mostrar(mensaje, seCierra);
        },
        mostrarAlerta : function(mensaje,seCierra){
                this.tipo = null;
                this._mostrar(mensaje, seCierra);
        },
        _mostrar : function(mensaje,seCierra){
                $scope.alertaPortal.mensaje = mensaje;
                $(".ALERTA_CONTENEDOR").hide().fadeIn(function(){
                        if(typeof(seCierra)!="undefined"){
                                if(seCierra){
                                        $scope.alertaPortal._cerrar();
                                } else {

                                }
                        } else {
                                $scope.alertaPortal._cerrar();
                        }
                });
        },
        
        _cerrar : function(){
            $timeout(function(){
                $scope.alertaPortal.cerrar();
            },5*1000);
        }
    };    
});
