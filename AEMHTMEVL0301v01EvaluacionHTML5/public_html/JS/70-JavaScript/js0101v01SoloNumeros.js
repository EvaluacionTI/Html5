/* 
 * Los patrones en JS son expresiones regulares el cual se define de la siguiente forma:
 * /^ expr regular $/
 * Es decir, siempre empieza por "/^" y acaba por $/
 * Si queremos indicar que van a ser un conjunto de caracteres deberemos de utlizar un operador de cardinalidad. 
 * En este caso deberemos de utilizar el * para indicar que serán n caracteres. 
 * Ahora, nos quedará de la siguiente forma:
 * /^([0-9])*$/
 */

/*
 * Funcion para validar si es un número entero
 * Devuelve:
 * 0 = Si es correcto
 * 1 = Si es incorrecto
 */
function validarNumero_forma01(pValor){
    alert("Ingrese a la funcion: validarEntero_forma01");
    
    if (isNaN(pValor)){
        alert ("El " + pValor + " no es un número.");
    }else{
        if (pValor % 1 === 0) {
            alert ("Correcto: Es un numero entero");
        }else{
            alert ("Incorrecto: Es un numero decimal");
        }
    }
}

function validarNumero_forma02(pValor){
    if (!/^([0-9])*$/.test(pValor))
      alert("El valor " + pValor + " no es un número");
  }




function validarNumero_forma03(pValor){
    alert(pValor);
    var key = window.Event ? pValor.which : pValor.keyCode;
    
    return (key >= 48 && key <= 57);
}