/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlRepeat', function myCtrlRepeat($scope){
    $scope.aVehiculo = {
        BMW : {marca : 'BMW', modelo : '318', aaaa:2010},
        Audi : {marca : 'Audi', modelo : 'A7', aaaa:2014},
        Mercedes : {marca : 'Mercedes', modelo : 'M4', aaaa:2015},
        Honda : {marca : 'Honda', modelo : 'HRV', aaaa:2016},
        Ford : {marca : 'Ford', modelo : 'Fiesta', aaaa:2017}
    };
    
    $scope.vDescripcion = "El controlador contiene la lista de Vehiculos";
});


