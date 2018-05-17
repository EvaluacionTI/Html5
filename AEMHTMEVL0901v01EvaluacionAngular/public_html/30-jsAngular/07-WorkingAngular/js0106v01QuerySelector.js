/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlQuery', [function(){
    var elementos = document.querySelectorAll(".item");
    var elementosQuery = document.querySelector(".vItem");
    
    for (x=0;x<elementos.length;x++) {
      console.log(elementos[x].innerHTML);
    }
    alert(elementosQuery.value);
    
    document.querySelector(".vItem").style.backgroundColor = "yellow";
}]);


