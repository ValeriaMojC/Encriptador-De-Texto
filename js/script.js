const inputTexto = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

// . La letra "e" es convertida para "enter"
// . La letra "i" es convertida para "imes"
// . La letra "a" es convertida para "ai"
// . La letra "o" es convertida para "ober"
// . La letra "u" es convertida para "ufat"

// solo debe aceptar letras minusculas sin caracreres especiales.

function botonEncriptar(){
    const txtEncriptado = encriptar(inputTexto.value);
    caja = document.querySelector(".texto").value;

    if(caja =="")
     {
        alert("Campo Vacio")
     }

    else if(!/^([a-z A-Z ñÑáéíóúÁÉÍÓÚ])+$/i.test(caja))
     {
        alert("Este campo contiene algun numero o caracter especial")
        inputTexto.value="";
     }
    else if(/^([a-z ])+$/i.test(caja)) 
    { 
    mensaje.style.backgroundImage ="none";
    mensaje.value = txtEncriptado;
    inputTexto.value ="";
   }
}

function botonDesencriptar(){
    const txtDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = "";
    mensaje.style.backgroundImage ="none";
    mensaje.value = txtDesencriptado;
    inputTexto.value ="";

}
function validar(){
    caja = document.querySelector(".texto").value;   
    if(caja =="")
     {
        alert("Campo Vacio")
     }
     else if(!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])+$/i.test(caja))
     {
        alert("Este campo contiene algun numero o caracter especial")
        inputTexto.value="";
     }
   
}  

function encriptar(stringEncriptada){
  
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
    
        }
    }
     return stringEncriptada;
}



function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return stringDesencriptada;

}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado");
}