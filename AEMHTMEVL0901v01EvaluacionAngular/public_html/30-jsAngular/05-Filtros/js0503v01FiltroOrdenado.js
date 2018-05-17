/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorFiltro03', [function(){
        this.aUsuario03 = [{
            vNombre03: 'carta',
            vApellido03: 'fianza',
            vTipoCuenta03: 'CREDITO INDIRECTO',
            vImporte03: 1349.28,
            vCodigo03: 10
        },
        {
            vNombre03: 'carta1',
            vApellido03: 'fianza1',
            vTipoCuenta03: 'CREDITO INDIRECTO1',
            vImporte03: 1349.29,
            vCodigo03: 20
        },
        {
            vNombre03: 'carta2',
            vApellido03: 'fianza2',
            vTipoCuenta03: 'CREDITO INDIRECTO2',
            vImporte03: 1349.30,
            vCodigo03: 30
        },
        {
            vNombre03: 'carta3',
            vApellido03: 'fianza3',
            vTipoCuenta03: 'CREDITO INDIRECTO3',
            vImporte03: 1349.40,
            vCodigo03: 40
        },
        {
            vNombre03: 'carta5',
            vApellido03: 'fianza5',
            vTipoCuenta03: 'CREDITO INDIRECTO5',
            vImporte03: 1349.50,
            vCodigo03: 50
        }
    ];
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
