/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorCSS01', [function(){
        
        this.vFechaSistema08 = new Date();
        this.vTipoCarta08  = ['Presentacion', 'Cumplimiento', 'Sunat'];
        
        this.aData08 = {
            vNombre08       : 'carta',
            vApellido08     : 'fianza',
            vTipoCuenta08: {
                vIdTipo08: '272017150009',
                vDescripcion08:'CREDITO INDIRECTO'
            },
            vImporte08      : 1349.28,
            vCodigo08       : 10,
            vTipoCarta08    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vTipoSubCarta08 : 'Exoneración',
            vFechaInicio08  : 171781200000,
            vFechaFin08     : 1437705300000,
            vEsActivo08     : true
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


