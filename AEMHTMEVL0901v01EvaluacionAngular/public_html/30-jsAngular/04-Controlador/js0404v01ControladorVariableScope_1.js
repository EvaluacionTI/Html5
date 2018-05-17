/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
vAplicacion.controller('MyCtrlListaAuto', function($scope){
    
    $scope.aListaAuto = {
        "BMW" : {Marca:"BMW", Modelo : "CX5", aaaa:2010},
        "Audi" : {Marca:"Audi", Modelo : "AX5", aaaa:2014},
        "Mercedes" : {Marca:"Mercedes", Modelo : "MX5", aaaa:2015},
        "Honda" : {Marca:"Honda", Modelo : "HX5", aaaa:2016},
        "Ford" : {Marca:"Ford", Modelo : "FX5", aaaa:2017}
    };

    $scope.descripcion = "El controlador tiene la lista de autos"
});