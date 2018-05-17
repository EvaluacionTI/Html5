/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script

vAplicacion.controller('MyCtrlListaFruta', function($scope){
    
    $scope.aListaFruta = {
      manzana:{'nombre': "Israel", 'precioCompra':  10.5, 'precioVenta': 21.25, 'diaEspecial':'Jueves'},
      platano:{'nombre': "maleno", 'precioCompra':  70.75, 'precioVenta': 31.35, 'diaEspecial':'Viernes'},
      huevo:{'nombre': "Doble", 'precioCompra':  60.55, 'precioVenta': 41.45, 'diaEspecial':'Lunes'},
      zanahoria:{'nombre': "Zanahorai", 'precioCompra':  40.5, 'precioVenta': 51.55, 'diaEspecial':'Sábado'},
      camote:{'nombre': "Camote", 'precioCompra':  30.5, 'precioVenta': 61.65, 'diaEspecial':'Miercoles'}
    };
    
    $scope.detalle = "Este controlador contiene la lista de frutas";
});

