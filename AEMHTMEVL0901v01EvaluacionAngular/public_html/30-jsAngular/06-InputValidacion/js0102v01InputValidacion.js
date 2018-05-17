/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorInput01', [function(){
        
        this.vFechaSistema07 = new Date();
        this.vTipoCarta07  = ['Presentacion', 'Cumplimiento', 'Sunat'];
        
        this.aData07 = {
            vNombre07       : 'carta',
            vApellido07     : 'fianza',
            vTipoCuenta07: {
                vIdTipo07: '272017150009',
                vDescripcion07:'CREDITO INDIRECTO'
            },
            vImporte07      : 1349.28,
            vCodigo07       : 10,
            vTipoCarta07    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vTipoSubCarta07 : 'Exoneración',
            vFechaInicio07  : 171781200000,
            vFechaFin07     : 1437705300000,
            vEsActivo07       : true
        };
        
        this.Procesar = function(pForm){
            if (pForm.$valid){
                window.alert('Correcto');
            }else{
                window.alert('Fallado');
            }
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


