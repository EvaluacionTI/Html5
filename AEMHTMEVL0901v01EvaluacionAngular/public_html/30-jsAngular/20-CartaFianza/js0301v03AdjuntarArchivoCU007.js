/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
var iniciar = angular.module('myAppCartaFianza', []);
    //alert(iniciar.name);
    // alert(iniciar.controller);

    iniciar.controller('myControladorAdjuntarCU007', function($scope){
        //alert($scope);
        $scope.vMensaje = "No hay error";
        
        // alert($scope.vMensaje);
        $scope.vFechaSistema = new Date().getFullYear();
        
        $scope.vFormatos = ".doc,.docx,.pdf";
        
//        $scope.iniciar=function(){
//          alert("boton iniciar")  ;
//        };
        $scope.aDataCargada = [
                    {   coditoTipoDocumento :   1050,
                        tipodocumento       : 'Pagaré', 
                        archivo             : 'pagare.doc', 
                        comentario          : 'pagare 01', 
                        esVisible           : true, 
                        esAdicional         : true, 
                        esSoloLectura       : true, 
                        esObligatorio       : false, 
                        esAdjuntado         : true,
                        index               : 1
                    },
                    {   codigoTipoDocumento :   1517,
                        tipodocumento       : 'Solicitud Carta Fianza', 
                        archivo             : 'solicitud.doc', 
                        comentario      : 'solicitud 01', 
                        esVisible       : true, 
                        esAdicional     : false, 
                        esSoloLectura   : true, 
                        esObligatorio   : true, 
                        esAdjuntado     : true,
                        index           : 2
                    },
                    {   codigoTipoDocumento : 1520,
                        tipodocumento       : 'Propuesta Crédito', 
                        archivo         : 'propuesta.doc', 
                        comentario      : 'propuesta 01', 
                        esVisible       : false, 
                        esAdicional     : false, 
                        esSoloLectura   : true, 
                        esObligatorio   : false, 
                        esAdjuntado     : true,
                        index           : 3
                    },
                    {codigoTipoDocumento    : 1527,
                        tipodocumento       : 'Ficha Literal', 
                        archivo             : 'ficha.doc', 
                        comentario          : 'ficha 01', 
                        esVisible           : true, 
                        esAdicional         : false, 
                        esSoloLectura       : true, 
                        esObligatorio       : false, 
                        esAdjuntado         : true,
                        index               : 4
                    },
                    {codigoTipoDocumento    :   1720,
                        tipodocumento       : 'Riesgos', 
                        archivo             : 'riesgos.doc', 
                        comentario          : 'riesgos 01', 
                        esVisible           : true, 
                        esAdicional         : false, 
                        esSoloLectura       : true, 
                        esObligatorio       : false, 
                        esAdjuntado         : true,
                        index               : 5
                    },
                    {codigoTipoDocumento    :   1727,
                        tipodocumento       : 'DNI', 
                        archivo             : '', 
                        comentario          : '', 
                        esVisible           : true, 
                        esAdicional         : false, 
                        esSoloLectura       : false, 
                        esObligatorio       : true, 
                        esAdjuntado         : false,
                        index               : 6
                    },
                    {codigoTipoDocumento    :   2027,
                        tipodocumento       : 'Contrato', 
                        archivo             : 'contrato.pdf', 
                        comentario          : 'contrato 01', 
                        esVisible           : true, 
                        esAdicional         : true, 
                        esSoloLectura       : false, 
                        esObligatorio       : false, 
                        esAdjuntado         : true,
                        index               : 7
                    }
            ];
        
        $scope.adjunto = {
            
            cargarDocumento: function(){
                return $scope.aDataCargada;
            },
            
            cargarArchivo: function(pIndex){
                alert("Nuevo archivo --->"+pIndex);
                alert($scope.aDataCargada[pIndex]);
                var longitud = $scope.aDataCargada.length;
                alert("longitud" + longitud);
                
                for (i=0; i < longitud; i++){
                    alert("Indice = " + pIndex + " " + $scope.aDataCargada[i].index);
                    if (pIndex==$scope.aDataCargada[i].index){
                        alert("encontrado" + pIndex + " - " + $scope.aDataCargada[i].index);
                        $scope.aDataCargada[i].esSoloLectura = true;
                        $scope.aDataCargada[i].esAdjuntado = true;
                        i=longitud;
                    }
                }                
            },
            
            descargarArchivo: function(pIndex){
                alert("Dercargando archivo --->"+pIndex);
                alert($scope.aDataCargada);
            },
            
            eliminarArchivo: function(pIndex){
                alert("Eliminando archivo --->"+pIndex);
                
//                delete $scope.aDataCargada[pIndex];
                
                var longitud = $scope.aDataCargada.length;
                alert("longitud" + longitud);
                
                for (i=0; i < longitud; i++){
                    alert("Indice = " + pIndex + " " + $scope.aDataCargada[i].index);
                    if (pIndex==$scope.aDataCargada[i].index){
                        alert("encontrado" + pIndex + " - " + $scope.aDataCargada[i].index);
                        $scope.aDataCargada[i].esAdjuntado = false;
                        i=longitud;
                    }
                }
            }
        };
    });
                