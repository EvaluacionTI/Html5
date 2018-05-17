/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorFiltro02', [function(){
        this.aUsuario02 = {
            vNombre02: 'carta',
            vApellido02: 'fianza',
            vTipoCuenta02: 'CREDITO INDIRECTO',
            vImporte02: 1349.28
        };
}]);

vAplicacion.filter('MyCapitalize', function(){
    return function(pTexto){
        if (pTexto!=null){
            return pTexto.substring(0,1).toUpperCase()+pTexto.substring(1);
        }
    };
});

vAplicacion.filter('MyCapitalize1', function(){
    return function(pTexto){
        var vResultado = null;
        var vPalabra = pTexto.split(' ');
        vPalabra.forEach(function(pItem){
            if (vResultado){
                vResultado =+ ' ';
            }else{
                vResultado = '';
            }
            vResultado += pItem.substring(0,1).toUpperCase()+pItem.substring(1).toLowerCase();
        });
        return vResultado;
    };
});
