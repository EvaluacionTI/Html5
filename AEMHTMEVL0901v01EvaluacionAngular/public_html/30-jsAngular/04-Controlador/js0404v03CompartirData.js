/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

vAplicacion.factory('Share', function(){
    return {
        dataObject: {color:"Blue"}
    };
});

vAplicacion.controller('MyCtrlDataA', function($scope){
    
    $scope.value = "Mi Controlador A";
});

vAplicacion.controller('MyCtrlDataB', function($scope){
    
    this.value = "Mi Controlador B";
});