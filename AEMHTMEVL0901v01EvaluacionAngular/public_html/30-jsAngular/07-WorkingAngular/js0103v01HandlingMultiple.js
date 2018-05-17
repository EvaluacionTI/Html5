/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.factory('RandomNameService',function($q, $timeout){

    var Nombre12 = ['Mery', 'Esteban', 'Don Julio', 'Dona Zoila'];
    var ApellidoP12 = ['Cardenas', 'Díaz', 'Cárdenas', 'Povis'];
    var ApellidoS12 = ['Povis', 'Vásquez', 'Cárdenas', 'Povis'];
    
    return{
        getNombre = function(ptipoNombre){
            var defer = $q.defer();
            var duration = Math.round(Math.random()*3000);
            
            $timeout(function(){
                var nombre='';
                switch(ptipoNombre){
                    case 'P':
                        nombre=Nombre12[Math.floor(Math.random()*Nombre12.length)];
                        break;
                    case 'M':
                        nombre=ApellidoP12[Math.floor(Math.random()*ApellidoP12.length)];
                        break;
                    case 'S':
                        nombre=ApellidoS12[Math.floor(Math.random()*ApellidoS12.length)];
                        break;
                }
                defer.resolve(nombre);
            }, duration);
            return defer.promise;
        }
    };
});

vAplicacion.controller('MyCtrlMultiple01', ['$q', 'RandomNameService', function($q, RandomNameService){
        var vVm = this;
        alert($q);
        var vPrimero = RandomNameService.getName('P');
        var vMedio = RandomNameService.getName('M');
        var vSegundo = RandomNameService.getName('S');
        
        vPrimero.then(function(name){
            vm.Nombre12 = name;
        });

        vMedio.then(function(name){
            vm.ApellidoP12 = name;
        });

        vSegundo.then(function(name){
            vm.ApellidoS12 = name;
        });
        
 }]);

