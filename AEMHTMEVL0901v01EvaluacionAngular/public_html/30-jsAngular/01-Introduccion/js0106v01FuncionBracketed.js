/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
vAplicacion.controller('MyControladorBracketed', function($scope){
    
    $scope.model = {
        vPrimerNombre: 'Alex',
        vSegundoNombre: 'Luis'
    };
    
    $scope.mostrar=function(){
        window.alert('Evaluación de Angular 1.6.4');
    };
    
});