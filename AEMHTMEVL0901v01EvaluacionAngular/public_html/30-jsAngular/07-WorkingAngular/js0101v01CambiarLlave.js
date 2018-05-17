/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('(~');
    $interpolateProvider.endSymbol('~)');
});

vAplicacion.controller('MyCtrlCambiarLlave01', [function(){
        
        this.vFechaSistema10 = new Date();
        
        this.aData10 = {
            vNombre10       : 'carta',
            vApellido10     : 'fianza',
            vTipoCuenta10: {
                vIdTipo10: '272017150009',
                vDescripcion10:'CREDITO INDIRECTO'
            },
            vImporte10      : 1349.28,
            vCodigo10       : 10,
            vTipoCarta10    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vFechaInicio10  : 171781200000,
            vFechaFin10     : 1437705300000
        };
        
        this.aComida10 = [
            {nombreComida10: 'Manzana', tipoComida10: 'Fruta'},
            {nombreComida10: 'Platano', tipoComida10: 'Fruta'},
            {nombreComida10: 'Papaya',  tipoComida10: 'Fruta'},
            {nombreComida10: 'Tuna',    tipoComida10: 'Fruta'},
            {nombreComida10: 'Naranja', tipoComida10: 'Fruta'},
            {nombreComida10: 'Vacuno',  tipoComida10: 'Carne'},
            {nombreComida10: 'Pollo',   tipoComida10: 'Carne'},
            {nombreComida10: 'Pescado', tipoComida10: 'Carne'},
            {nombreComida10: 'Chancho', tipoComida10: 'Carne'}
        ];
        
        this.seleccionarTipoComida10 = '';
 }]);


vAplicacion.filter('MyCapitalize', function(){
    return function(pTexto){
        if (pTexto!=null){
            return pTexto.substring(0,1).toUpperCase()+pTexto.substring(1);
        }
    };
});
