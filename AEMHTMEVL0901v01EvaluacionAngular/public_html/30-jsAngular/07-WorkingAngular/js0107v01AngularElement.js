
var vAplicacion = angular.module('MyAppEvaluacion', []);

vAplicacion.controller('MyCtrlAngular', [function($scope){
    
    $scope.count = 10;
    $scope.addCountByNgClick = function(){
        $scope.count++;
    };
}]);

function addCount(){
    var vNow = angular.element(count).html();
    
    angular.element(count).html(++vNow);
}
