/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
angular.module('MyApp', []);

angular.module('MyApp').controller('MyControladorSintaxis01', [function(){
        this.mensaje = 'Linea de Crédito';
}]);

angular.module('MyApp').controller('MyControladorSintaxis02', [function(){
        this.mensaje = 'Carta de Crédito';
}]);

angular.module('MyApp').controller('MyControladorSintaxis03', [function(){
        this.mensaje = 'Carta Fianza';
}]);