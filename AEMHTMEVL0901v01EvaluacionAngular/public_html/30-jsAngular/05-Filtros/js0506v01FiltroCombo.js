/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyControladorCombo01', [function(){
        
        this.vFechaSistema09 = new Date();
        
        this.aData09 = {
            vNombre09       : 'carta',
            vApellido09     : 'fianza',
            vTipoCuenta09: {
                vIdTipo09: '272017150009',
                vDescripcion09:'CREDITO INDIRECTO'
            },
            vImporte09      : 1349.28,
            vCodigo09       : 10,
            vTipoCarta09    : ['Presentacion', 'Cumplimiento', 'Sunat'],
            vFechaInicio09  : 171781200000,
            vFechaFin09     : 1437705300000
        };
        
        this.aComida09 = [
            {nombreComida: 'Manzana', tipoComida: 'Fruta'},
            {nombreComida: 'Platano', tipoComida: 'Fruta'},
            {nombreComida: 'Papaya', tipoComida: 'Fruta'},
            {nombreComida: 'Tuna', tipoComida: 'Fruta'},
            {nombreComida: 'Naranja', tipoComida: 'Fruta'},
            {nombreComida: 'Vacuno', tipoComida: 'Carne'},
            {nombreComida: 'Pollo', tipoComida: 'Carne'},
            {nombreComida: 'Pescado', tipoComida: 'Carne'},
            {nombreComida: 'Chancho', tipoComida: 'Carne'}
        ];
        
        this.seleccionarTipoComida = '';
 }]);


vAplicacion.filter('MyCapitalize', function(){
    return function(pTexto){
        if (pTexto!=null){
            return pTexto.substring(0,1).toUpperCase()+pTexto.substring(1);
        }
    };
});
