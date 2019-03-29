/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vDom = document.getElementById("idCoordenadas");

function getLocalizacion3(){
    //alert("getLocalizacion3()");
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarPosicion3, mostrarErrores3);
    }else{
        vDom.innerHTML = "Geolocalización no es soportado por el browser";
    }
}

function mostrarPosicion3(pPosicion){
    // alert(pPosicion.coords.latitude);
    // alert(pPosicion.coords.longitude);
    var  vLatitudLongitud = pPosicion.coords.latitude + "," + pPosicion.coords.longitude;
    alert(vLatitudLongitud);
    var  vImgUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + 
            vLatitudLongitud+"&zoom=14&size=400x300&key=AIzaSyCXnXhIFAZ5jsOCoFp4kUzwVDqED79r8I8";
    
    //vLatitudLongitud+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    
    alert(vImgUrl);
    document.getElementById("idCoordenadasMapa").innerHTML="<img src='" + vImgUrl +"'>";
}

function mostrarErrores3(pError){
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