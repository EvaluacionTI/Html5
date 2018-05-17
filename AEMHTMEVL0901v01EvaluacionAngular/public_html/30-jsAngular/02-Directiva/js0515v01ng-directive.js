/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlDirective', function ($scope){
    
});


vAplicacion.directive('myDirective', function(){
    return{
        template : '<p>Evaluacion Angular - directive</p>',
        restrict : 'AEC'
    }
});

