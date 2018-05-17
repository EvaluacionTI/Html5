/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// Estructura de una aplicación angular con Java Script
var iniciar = angular.module('myAppCartaFianza', []);
    //alert(iniciar.name);
    // alert(iniciar.controller);

    iniciar.controller('myControladorAdjuntarFiltro', function($scope){
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
                        tipodocumento      : 'Solicitud Carta Fianza', 
                        archivo         : 'solicitud.doc', 
                        comentario      : 'solicitud 01', 
                        esVisible       : true, 
                        esAdicional     : false, 
                        esSoloLectura   : true, 
                        esObligatorio   : true, 
                        esAdjuntado     : true,
                        index           : 2
                    },
                    {   codigoTipoDocumento :   1520,
                        tipodocumento      : 'Propuesta Crédito', 
                        archivo         : 'propuesta.doc', 
                        comentario      : 'propuesta 01', 
                        esVisible       : false, 
                        esAdicional     : false, 
                        esSoloLectura   : true, 
                        esObligatorio   : false, 
                        esAdjuntado     : true,
                        index           : 3
                    },
                    {codigoTipoDocumento    :   1527,
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
                        archivo             : 'dni.pdf', 
                        comentario          : 'dni 01', 
                        esVisible           : true, 
                        esAdicional         : false, 
                        esSoloLectura       : true, 
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
            
            cargarArchivo: function(){
                alert("Iniciando la carga");
                
            },
            
            descargarArchivo: function(){
                alert("Dercargando archivo");
            },
            
            eliminarArchivo: function(){
                alert("Eliminando archivo");
            }
        };
    });
                