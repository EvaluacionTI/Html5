/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlModel', function ($scope){
    $scope.car = {
        make : '',
        selectedYear : '',
        yearOptions : [
            {label:'2000', year:'2000'},
            {label:'2001', year:'2001'},
            {label:'2002', year:'2002'},
            {label:'2003', year:'2003'},
            {label:'2004', year:'2004'},
            {label:'2005', year:'2005'},
            {label:'2006', year:'2006'},
            {label:'2007', year:'2007'}
        ]
    };
});


