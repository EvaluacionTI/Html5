/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacionCore = angular.module('appCore',[]);

vAplicacionCore.value('hostname', '/TataCartaFianza');

vAplicacionCore.factory('cargador', function($pTimeOut){

    var aConfig = {
        esVisible : false,
        tipoMensaje : 1,
        mensaje : '',
        mostrarMensajeError : false
    };
    
    return{
        
    };
});
