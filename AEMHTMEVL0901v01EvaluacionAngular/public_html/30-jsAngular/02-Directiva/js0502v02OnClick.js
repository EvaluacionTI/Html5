/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function randomFunction(){
    alert("Fuera de angular : " + Math.random()*1000);
}

function evaluarOnClick(pEl){
    var $scope = angular.element(pEl).scope();
    
    $scope.vPrimerNombreClick = "Rosa";
    $scope.vSegundoNombreClick = "Cardenas";
    $scope.$apply();
}