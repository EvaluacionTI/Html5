/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlIterator01', [function(){
    var vVm = this;

    console.log(vVvm);
    var Nombre14 = 'Mery';
    var ApellidoP14 = 'Cárdenas';
    var ApellidoS14 = 'Povis';
    console.log(Nombre14);   
        
    var aSaludos = ['Hola', 'Que tal', 'Como te va', 'Adios'];
    var aNombre = ['Mery', 'Rosa', 'Cárdenas', 'Povis'];
    
    vVm.aOracionSaludos = [];
    
    angular.forEach(names, function(name){
        var randomSaludo = aSaludos[Math.floor(Math.random()*aSaludos.length)];
        var item=randomSaludo + ' ' + name;
        vm.aOracionSaludos.push(item);
    });
}]);


