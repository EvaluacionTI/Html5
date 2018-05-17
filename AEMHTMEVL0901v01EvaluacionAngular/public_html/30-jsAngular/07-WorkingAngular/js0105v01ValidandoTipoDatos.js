/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlValidando', [function(){
    this.NombreP15='Mery';
    this.ApellidoP15='Cárdenas';
    this.ApellidoS15='Povis';
    
    //this.aData = {nombre: 'Esteban', edad:15};
    //this.aData = 'Evaluacion de angular';
    //this.aData = 15234;
    //this.aData = NaN;
    //this.aData = new Date();
    this.aData = angular.element('<p>Carta Fianza</p>');
    this.resultado = [];
    
    var isObjeto = 'Es objeto : ' + angular.isObject(this.aData);
    var isArray = 'Es array   : ' + angular.isArray(this.aData);
    var isString = 'Es string : ' + angular.isString(this.aData);
    var isNumber = 'Es number : ' + angular.isNumber(this.aData);
    var isDate = 'Es date : ' + angular.isDate(this.aData);
    var isElement = 'Es element : ' + angular.isElement(this.aData);
    var isDefined = 'Es defined : ' + angular.isDefined(this.aData);
    var isUndefined = 'Es undefined : ' + angular.isUndefined(this.aData);
    
    this.resultado.push(isObjeto, isArray, isString, isNumber, isDate, isElement, isDefined, isUndefined);



}]);


