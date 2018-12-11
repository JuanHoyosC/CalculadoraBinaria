
function texto_binario(){
   var caracteres = [];
   var binario = "";
   var cadena = document.getElementById("textarea_text").value;
   if(cadena !=""){
     for (var i = 0; i < cadena.length; i++){
       caracteres[i] = cadena.charAt(i).charCodeAt(0);
     }
     document.getElementById("textarea_binario").value= ascciBinario(caracteres);
   }else{
     alert("No ha introducido un texto");
     document.getElementById("textarea_binario").value="";
   }
 }

 //Convierte los ascci en binario
 function ascciBinario(caracteres){
    var binario = "";
    for (var i = 0; i < caracteres.length; i++) {
       var ceros = "";
       var auxiliar = caracteres[i].toString(2);
       for (var j = 0; j < 8-auxiliar.length; j++) {
         ceros = ceros+"0";
       }
         binario = binario+ceros+auxiliar+" ";
    }
    return binario;
 }

 // Funcion llamada por el btn_2 para convertir de binario a texto
 function binario_texto(){
 var arreglo = [];
 var arreglo_ascci = [];
 var binario = document.getElementById("textarea_binario_texto").value;
 if (binario != "") {
   var binario_sin_espacios = eliminarCaracteresNoPermitidos(binario);
   arreglo = bloquesBinarios(binario_sin_espacios);
   ascci = bin_decimal(arreglo);
   var texto = decodificar(ascci);
   var binario = document.getElementById("textarea_texto_binario").value = texto;
 }else {
   alert("No ha introducido un binario");
   document.getElementById("textarea_texto_binario").value="";
 }
}

//Elimina los caracteres distintos de 1 y 0
 function eliminarCaracteresNoPermitidos(palabra){
   var binario_sin_espacios = "";
   for(var i = 0; i< palabra.length;i++){
      if(palabra[i] != " " && palabra[i]== "0"||palabra[i] != " " && palabra[i]== "1" ){
       binario_sin_espacios = binario_sin_espacios + palabra[i];
      }
   }
   return binario_sin_espacios;
 }

//Pone en bloque de 1byte los numeros binarios dentro de un arreglo
 function bloquesBinarios(binario){
   var auxiliar = "";
   var contador = 0;
   var arreglo = [];
   for(var i = 0; i< binario.length; i++){
     auxiliar = auxiliar+binario[i];
     contador++;
      if(contador ==8){
        arreglo.push(auxiliar);
        auxiliar = "";
        contador = 0;
      }
   }
   return arreglo;
 }

//Pasa de binario a ascci
 function bin_decimal(arreglo_binario){
   var arreglo_decimal = [];
   for(var j = 0; j < arreglo_binario.length; j++){
      var exponente = 0;
      var numero_decimal = 0;
      var numero_binario = arreglo_binario[j];
       for (var i = numero_binario.length-1; i>= 0; i--) {
         if (numero_binario[i]== 1) {
           numero_decimal = numero_decimal + Math.pow(2,exponente);
         }
          exponente++;
       }
      arreglo_decimal.push(numero_decimal);
    }
   return arreglo_decimal;
 }

 //Decodificara el ascci a texto
 function decodificar(ascci) {
   var texto = "";
   for (var i = 0; i < ascci.length; i++){
     texto = texto +String.fromCharCode(ascci[i]);
   }
   return texto;
 }
