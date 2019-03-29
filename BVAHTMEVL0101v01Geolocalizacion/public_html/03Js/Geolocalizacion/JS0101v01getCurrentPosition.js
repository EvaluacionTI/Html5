/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vDom = document.getElementById("idCoordenadas");

function getLocalizacion(){
  
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(mostrarPosicion);
    }else{
        vDom.innerHTML = "Geolocalización no es soportado por el browser";
    }
}

function mostrarPosicion(pPosicion){
     alert(pPosicion.coords.latitude);
     alert(pPosicion.coords.longitude);
    //  alert("mostrarPosicion()");
      vDom.innerHTML = "Latitud : " + pPosicion.coords.latitude;
      
      alert(vDom);
//    vDom.innerHTML = "Latitud : " + pPosicion.coords.latitude+
//            "<br><br>Longitud " + pPosicion.coords.longitude;
}

