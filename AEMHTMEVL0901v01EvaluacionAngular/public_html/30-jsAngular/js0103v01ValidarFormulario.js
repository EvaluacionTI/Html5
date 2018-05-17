/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vApp=angular
        .module('myAppFormulario', [])
        .controller('myCtrlFormulario',function($scope){
            $scope.formData = {};
            
            $scope.submitForm = function(formData){
                alert('Grabado trama ' + JSON.stringify(formData));
            };
        });

