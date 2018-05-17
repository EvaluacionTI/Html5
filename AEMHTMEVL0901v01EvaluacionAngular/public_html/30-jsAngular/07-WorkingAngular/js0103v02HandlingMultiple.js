/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.factory('RandomNameService',function($q, $timeout){

    var Nombre13 = ['Mery', 'Esteban', 'Don Julio', 'Dona Zoila'];
    var ApellidoP13 = ['Cardenas', 'Díaz', 'Cárdenas', 'Povis'];
    var ApellidoS13 = ['Povis', 'Vásquez', 'Cárdenas', 'Povis'];
    
    return{
        getNombre = function(ptipoNombre){
            var defer = $q.defer();
            var duration = Math.round(Math.random()*3000);
            
            $timeout(function(){
                var nombre='';
                switch(ptipoNombre){
                    case 'P':
                        nombre=Nombre13[Math.floor(Math.random()*Nombre13.length)];
                        break;
                    case 'M':
                        nombre=ApellidoP13[Math.floor(Math.random()*ApellidoP13.length)];
                        break;
                    case 'S':
                        nombre=ApellidoS13[Math.floor(Math.random()*ApellidoS13.length)];
                        break;
                }
                defer.resolve(nombre);
            }, duration);
            return defer.promise;
        }
    };
});

vAplicacion.controller('MyCtrlMultiple02', ['$q', 'RandomNameService', function($q, RandomNameService){
    var vVm = this;

    var vPrimero = RandomNameService.getName('P');
    var vMedio = RandomNameService.getName('M');
    var vSegundo = RandomNameService.getName('S');
/*        
        vPrimero.then(function(name){
            vm.Nombre13 = name;
        });

        vMedio.then(function(name){
            vm.ApellidoP13 = name;
        });

        vSegundo.then(function(name){
            vm.ApellidoS13 = name;
        });
*/        

    var completed = $q.all([vPrimero, vMedio, vSegundo]);
    
    completed.then(function (data){
        vm.vNombre13 = data[0];
        vm.ApellidoP13 = data[1];
        vm.ApellidoS13 = data[2];
    });
 }]);

