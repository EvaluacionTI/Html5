/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlInclude', function ($scope){
    
    $scope.aEspecialidad = {
        Apple : {nombre_comida : 'Israel', precio_comida : 2010.99},
        Banana : {nombre_comida : 'Maleno', precio_comida : 2014.88},
        Carrot : {nombre_comida : 'Zanahoria', precio_comida : 2015.77},
        Egg : {nombre_comida : 'Huevo', precio_comida : 2016.66},
        Figa : {nombre_comida : '6 Figa', precio_comida : 2017.55}
    };
    
    $scope.vDescripcion_Comida = "El controlador contiene la lista de Comida";
    
    $scope.foodListaUrl = "ang0501v02ngIncludeListaFood.html";

});


