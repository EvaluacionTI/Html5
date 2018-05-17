/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validate_importe(value,decimal)
{
    if(decimal===undefined)
        decimal=0;
 
    if(decimal===1){
        // Permite decimales tanto por . como por ,
        var patron=new RegExp("^[0-9]+((,|\.)[0-9]{1,2})?$");
    }else{
        // Numero entero normal
        var patron=new RegExp("^([0-9])*$");
    }
 
    if(value.search(patron)===0){
        return 1;
    }
    return 0;
}
