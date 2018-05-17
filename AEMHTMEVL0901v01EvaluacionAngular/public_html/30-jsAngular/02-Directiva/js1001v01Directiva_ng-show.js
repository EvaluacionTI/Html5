/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var showHideDemo = angular.module('myAppCartaFianza',[]);

    showHideDemo.controller('showHideController', function($scope){
            $scope.libs = [
                    {name: 'AngularJS', checked: false},
                    {name: 'Backnone', checked: true},
                    {name: 'Knockout', checked: false},
                    {name: 'Jquery', checked: false},
                    {name: 'MooTools', checked: false},
                    {name: 'YUI Library', checked: false},
                    {name: 'Ember', checked: true}
            ];
});


