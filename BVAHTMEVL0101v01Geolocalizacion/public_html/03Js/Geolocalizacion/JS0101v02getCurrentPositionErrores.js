/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vDom = document.getElementById("idCoordenadas");

function getLocalizacion(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarErrores);
    }else{
        vDom.innerHTML = "Geolocalización no es soportado por el browser";
    }
}

function mostrarPosicion(pPosicion){
    vDom.innerHTML = "Latitud : " + pPosicion.coords.latitude +
            "<br><br>Longitud " + pPosicion.coords.longitude;
}

function mostrarErrores(pError){
    switch(pError.code){
        case pError.PERMISSION_DENIED:
            vDom.innerHTML = "Usuario denegó el requerimiento de Geolocalización";
            break;
        case pError.POSITION_UNAVAILABLE:
            vDom.innerHTML = "Información de localización no disponible";
            break;
        case pError.TIMEOUT:
            vDom.innerHTML = "El tiempo de requerimiento de localizacion agotado";
            break;
        case pError.UNKNOWM_ERROR:
             vDom.innerHTML = "Un error desconocido a ocurrido";
            break;
    }
}