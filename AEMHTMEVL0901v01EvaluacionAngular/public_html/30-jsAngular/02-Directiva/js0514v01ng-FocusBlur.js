/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('myAppEvaluacion', []);

vAplicacion.controller('myCtrlFocus', function ($scope){
    $scope.nombre="";
    $scope.history = [];
    
    $scope.focusHandler = function(pValue){
        var update="";
        var timestamp = Date.now();
        
        switch(pValue){
            case 1:
                update = "Focus : Input text field in focus";
                break;
            case 2:
                update = "Focus : Select in focus";
                break;
            case 3:
                update = "Focus : Input textarea in focus";
                break;
        }
        $scope.history.push(timestamp + " : " + update);
    };

    $scope.blurHandler = function(pValue){
        var update="";
        var timestamp = Date.now();
        
        switch(pValue){
            case 1:
                update = "Blur: Input text field in focus";
                break;
            case 2:
                update = "Blur: Select in focus";
                break;
            case 3:
                update = "Blur: Input textarea in focus";
                break;
        }
        $scope.history.push(timestamp + " : " + update);
    };    
});


