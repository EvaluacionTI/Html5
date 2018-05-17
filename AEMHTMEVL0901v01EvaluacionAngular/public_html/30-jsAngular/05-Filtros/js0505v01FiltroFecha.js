/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorFiltro05', [function(){
        
        this.vFechaSistema05 = new Date();
        
        this.aUsuario05 = {
            vNombre05       : 'carta',
            vApellido05     : 'fianza',
            vTipoCuenta05: {
                vIdTipo05: '272017150009',
                vDescripcion05:'CREDITO INDIRECTO'
            },
            vImporte05      : 1349.28,
            vCodigo05       : 10,
            vTipoCarta05    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vFechaInicio05  : 171781200000,
            vFechaFin05     : 1437705300000
        };
 }]);


vAplicacion.filter('MyCapitalize', function(){
    return function(pTexto){
        if (pTexto!=null){
            return pTexto.substring(0,1).toUpperCase()+pTexto.substring(1);
        }
    };
});
