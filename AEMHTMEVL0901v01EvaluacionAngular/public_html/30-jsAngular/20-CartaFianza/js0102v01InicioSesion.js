/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var vAplicacion = angular.module('appCartaFianza', []);

    vAplicacion.controller('ctrlInicioSesion02', function($scope){
        $scope.vMensajError = "";
        
        $scope.vFechaSistema = new Date().getFullYear();
        
        $scope.iniciarSesion02 = function(){
//		alert("ingreso" + $('#idUsuario')); // el Objeto
//                alert($("#idUsuario").val()); //El contenido del dato
//                alert($("#idUsuario").val().length); // La longitud

// Validar el foco si no se ha registrado nada el foco permanece
            if($("#idUsuario").val().length===0){
                    $("#idUsuario").focus();
                    return false;
            }

            if($("#idClave").val().length===0){
                    $("#idClave").focus();
                    return false;
            }

            logeo_acceder("false");
        };
    });


var logeo_acceder=function(borrar_sesion){
    
//    alert(borrar_sesion);
    var ruta = '../20-CartaFianza/portal/postAutenticacion.html?txt_log_acceder='+borrar_sesion+'&rnd='+Math.random();
//    alert(ruta);
//    alert($('#idUsuario').val());
//    alert($('#idClave').val());
//    alert(Math.random());
    if($("#nroIFrame").size()!==0){
        $("#nroIFrame").remove();
    }
    
    $("body").append('<iframe id="nroIFrame" src="'+ruta+'"></iframe>');
    //console.log("1. AJAX jQuery Cargamos en un iframe la ruta '"+ruta+"'");
     //alert('Creo el iframe');

    $("#nroIFrame").hide().load(function(){
//        alert("2. Ajax JQuery: ingreso a hide de JQ : "+ ruta);

        $('#nroIFrame').unbind("load");

//        alert(" Href : " + location.href);
//        alert(" Protocolo :" + location.protocol);
//        alert(" Host : " + location.host);
//        alert(" Pathname : " + location.pathname);
//        var newUrl = "portal/index.html";
        //location.assign(newUrl); //Podrá volver a una ventana atras
//        location.replace(newUrl); //Podrá volver a una ventana atras
       
        $.ajax({
           url:'j_security_check',
           data:{jQUsuario : $("#idUsuario").val(), jQClave : $("#idClave").val(), jQRnd : Math.random()},
           success:function(data, textStatus, jqXHR){

                console.log("3. respuesta del 'j_security_check'");
		$('#nroIFrame').bind("load");
                console.log(data);
//                var dataJSON = {"estado" : false};
//                
//                // console.log("3.1. dataJSON " + dataJSON);
//                try {
//                    dataJSON = jQuery.par.parseJSON( data );
//                } catch(e){};
//                //console.log("4. dataJSON jQuery" + dataJSON);
//                if (dataJSON.estado){
//                  //  console.log("4. dataJSON :" + dataJSON.url + ' ' + dataJSON.estado);
//                    setTimeout(function()
//                        {location.href = dataJSON.url;},
//                        1500
//                    );
//                }else{
//                    console.log("5. dataJSON sin acceso" + dataJSON);
//                }
           }
       });
    });

};