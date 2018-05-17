/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlListener01', ['$scope', function($scope){
        
        var vVm = this;
        
        vVm.NombreEspecial11 = 'Mery';
        vVm.Mensaje11 = '';
        vVm.Nombre11 = 'Esteban';
        
        $scope.$watch('cc01.Nombre11', function(newValue, oldValue){
            console.log('New Value : ', newValue, ', Old Value', oldValue );
            if (newValue === vVm.NombreEspecial11){
                vVm.Mensaje11 = 'Correcto';
            }else{
                vVm.Mensaje11='';
            }
        });
 }]);

