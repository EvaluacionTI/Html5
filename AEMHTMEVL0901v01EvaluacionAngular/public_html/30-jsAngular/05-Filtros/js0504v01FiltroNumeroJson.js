/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlJson', function($scope){
        $scope.modeloJson = {
            datoNombre:'Alex',
            fechaNacimiento: {
                mes : 'Agosto',
                dia : '08',
                yyyy : 1969
            }
        };
    
});

vAplicacion.controller('MyControladorFiltro04', [function(){
        
        this.aUsuario04 = [{
            vNombre04: 'carta',
            vApellido04: 'fianza',
            vTipoCuenta04: {
                vIdTipo: '272017150009',
                vDescripcion04:'CREDITO INDIRECTO'
            },
            vImporte04: 1349.28,
            vCodigo04: 10,
            vTipoCarta04: ['Presentacion', 'Cumplimiento', 'Sunat']
        },
        {
            vNombre04: 'carta1',
            vApellido04: 'fianza1',
            vTipoCuenta04: {
                vIdTipo: '272017150009',
                vDescripcion04:'CREDITO INDIRECTO1'
            },
            vImporte04: 1349.29,
            vCodigo04: 20,
            vTipoCarta04: ['Presentacion', 'Cumplimiento', 'Sunat']            
        },
        {
            vNombre04: 'carta2',
            vApellido04: 'fianza2',
            vTipoCuenta04: {
                vIdTipo: '272017150009',
                vDescripcion04:'CREDITO INDIRECTO2'
            },
            vImporte04: 1349.30,
            vCodigo04: 30,
            vTipoCarta04: ['Presentacion', 'Cumplimiento', 'Sunat']
        },
        {
            vNombre04: 'carta3',
            vApellido04: 'fianza3',
            vTipoCuenta04: {
                vIdTipo: '272017150009',
                vDescripcion04:'CREDITO INDIRECTO3'
            },
            vImporte04: 1349.40,
            vCodigo04: 40,
            vTipoCarta04: ['Presentacion', 'Cumplimiento', 'Sunat']
        },
        {
            vNombre04: 'carta5',
            vApellido04: 'fianza5',
            vTipoCuenta04: {
                vIdTipo: '272017150009',
                vDescripcion04:'CREDITO INDIRECTO4'
            },
            vImporte04: 1349.50,
            vCodigo04: 50,
            vTipoCarta04: ['Presentacion', 'Cumplimiento', 'Sunat']
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

vAplicacion.filter('separarCaracter', function(){
    return function(pTexto){
        var caracter = pTexto.split('');
        return caracter.join('-');
    }
});