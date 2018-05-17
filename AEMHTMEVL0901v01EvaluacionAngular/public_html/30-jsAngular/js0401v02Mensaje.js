/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular.module('MyApp', []);

angular.module('MyApp').controller('MyPadreControlador' [function(){
        this.menssage = 'Linea de Crédito';
}]);

angular.module('MyApp').controller('MyPrimerHijoControlador' [function(){
        this.menssage = 'Carta de Crédito';
}]);

angular.module('MyApp').controller('MySegundoHijoControlador' [function(){
        this.menssage = 'Carta Fianza';
        
        $interval(function(){
            this.value = Math.round(Math.random()*1000000)+1;
        }, bind(this),2000);
}]);