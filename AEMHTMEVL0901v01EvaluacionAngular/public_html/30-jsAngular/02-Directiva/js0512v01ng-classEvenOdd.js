/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlEven', function ($scope){
    $scope.listaFruta = [
        {nombreFruta : 'Banana', url : '../imagenes/fruta/banana.jpg'},
        {nombreFruta : 'Chirimoya', url : '../imagenes/fruta/chirimoya.jpg'},
        {nombreFruta : 'Mandarina', url : '../imagenes/fruta/mandarina.jpg'},
        {nombreFruta : 'Manzana', url : '../imagenes/fruta/manzana.jpg'},
        {nombreFruta : 'Naranja', url : '../imagenes/fruta/naranja.jpg'},
        {nombreFruta : 'Papaya', url : '../imagenes/fruta/papaya.jpg'},
        {nombreFruta : 'Tuna', url : '../imagenes/fruta/tuna.jpg'}
    ];
});


