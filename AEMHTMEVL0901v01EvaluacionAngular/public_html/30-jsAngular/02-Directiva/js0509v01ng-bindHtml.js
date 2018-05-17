/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', ['ngSanitize']);

vAplicacion.controller('myCtrlBindHtml', function ($scope){
    $scope.someHtml = "<p><strong>This is some </strong>HTML</p>";
    $scope.someMoreHtml = "<p><a href='https://www.financiero.pe'>Go to Banco Financiero</a></p>";
    $scope.eventoMoreHtml = "<p style='color:blue'>I should be blue</p>";
});


