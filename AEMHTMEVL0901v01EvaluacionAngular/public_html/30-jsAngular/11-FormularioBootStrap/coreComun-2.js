/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var coreComun = angular.module('coreComun', []);

    coreComun.factory("cargador", function($timeout) {

        var config = {
                esVisible : false,
                tipoMensaje : 1,
                mensaje : "",
                mostrarMensajeError : false
        };

        var autocentrar = function(){
                $(".CARGADOR_MODAL").css("top",Math.ceil(($(window).height()-($(".CARGADOR_MODAL").height()+22))/2)+"px");
                $(".CARGADOR_MODAL").css("left",Math.ceil(($(window).width()-($(".CARGADOR_MODAL").width()+22))/2)+"px");
        };

        return {
            data : config,
            mostrarAcceder : function(callback){
                    this.mostrar(callback);
                    this.data.tipoMensaje = 2;
            },
            mostrar : function(callback){
                    this.data.tipoMensaje = 1; this.data.mostrarMensajeError = false;
                    if(config.esVisible){
                            if(typeof(callback)!="undefined"){
                                    callback();
                            }
                    } else {
                            config.esVisible = true;
                            $(".CARGADOR").fadeIn("fast",function(){
                                    if(typeof(callback)!="undefined"){
                                            callback();
                                    }
                            });
                    }
            },
            mostrarMensaje : function(mensaje,callback){
                    this.mostrar(callback);
                    this.data.tipoMensaje = 0; 
                    this.data.mensaje = mensaje;
            },
            mostrarError : function(mensaje,callback){
                    this.mostrar(callback);
                    this.data.tipoMensaje = 3;
                    this.data.mensajeError = mensaje;
            },
            ocultar : function(callback){
                    if(!config.esVisible){
                            if(typeof(callback)!="undefined"){
                                    callback();
                            }
                    } else {
                            $(".CARGADOR").fadeOut("fast",function(){
                                    config.esVisible = false;
                                    if(typeof(callback)!="undefined"){
                                            callback();
                                    }
                            });
                    }
            },
            instanciar : function(){
                    $(window).resize(function() {
                            autocentrar();
                    });
                    autocentrar();
                    $(".CARGADOR").hide();
            }
        };
    });
