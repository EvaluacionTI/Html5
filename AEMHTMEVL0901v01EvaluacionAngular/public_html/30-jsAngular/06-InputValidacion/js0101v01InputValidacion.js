/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorInput', [function(){
        
        this.vFechaSistema06 = new Date();
        this.vTipoCarta06  = ['Presentacion', 'Cumplimiento', 'Sunat'];
        
        this.aUsuario06 = {
            vNombre06       : 'carta',
            vApellido06     : 'fianza',
            vTipoCuenta06: {
                vIdTipo06: '272017150009',
                vDescripcion06:'CREDITO INDIRECTO'
            },
            vImporte06      : 1349.28,
            vCodigo06       : 10,
            vTipoCarta06    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vTipoSubCarta06 : 'Exoneración',
            vFechaInicio06  : 171781200000,
            vFechaFin06     : 1437705300000,
            vEsActivo       : true
        };
 }]);

vAplicacion.filter('MySiNo', function(){
   return function(pValue){
       if (pValue===true){
           return 'Si';
       }else if(pValue===false){
           return 'No';
       }else{
           return 'unknown';
       }
   };
});


vAplicacion.filter('MyCapitalize', function(){
    return function(pTexto){
        if (pTexto!=null){
            return pTexto.substring(0,1).toUpperCase()+pTexto.substring(1);
        }
    };
});
