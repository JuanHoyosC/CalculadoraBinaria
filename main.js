
var array = new Array;
var cadenaBinaria = "";
//Metodo que llama el boton para pasar de decimal a binario
function decimal_binario(){
    array = [];
    var numero_decimal = parseInt(document.getElementById("numero_decimal_1").value);
    if(isNaN(numero_decimal)){
       alert("Debe digitar un numero decimal");
       document.getElementById("numero_decimal_1").value = "";
       document.getElementById("numero_binario_1").value = "";

   }else{
     llenarArray(numero_decimal);
     document.getElementById("numero_binario_1").value = convertir();
   }
}

//Llena el array con todos los divisores del numero_decimal / 2
function llenarArray(numero_decimal){
  while(numero_decimal >= 1){
      array.unshift(numero_decimal);
      numero_decimal = Math.floor(numero_decimal/2);
   }
}

//Del metodo llenarArray se mirara los pares e impares y así se hará la convercion
function convertir(){
  var binario = "";
  // si el numero actual del array es par se concardena un 0 y si es impar se concardena un 1
  for(var i =0; i < array.length; i++){
    if (array[i]%2 == 0) {
      binario = binario + "0";
    }else {
      binario = binario + "1";
    }
  }
  return binario;
}

//Convierte el numero de binario a decimal
function binario_decimal(){
  var numero_binario = document.getElementById("numero_binario_2").value;
  if(numero_binario == ""){
     alert("Debe digitar un numero binario");
  }else{
     if(comprobarNumeroBinario(numero_binario) != true){
       //bin_decimal returna el numero en decimal
       var numero_decimal = bin_decimal(numero_binario);
       document.getElementById("numero_decimal_2").value = numero_decimal;
     }else {
       alert("El numero digitado no es binario");
       document.getElementById("numero_decimal_2").value = "";
       document.getElementById("numero_binario_2").value = "";
     }
  }
}

//Comprueba si el numero es binario
function comprobarNumeroBinario(numero_binario){
  var comprobacion = false;
  for (var i = 0; i < numero_binario.length; i++) {
    if(numero_binario[i] != "1" && numero_binario[i]!= "0"){
      comprobacion = true;
    }
  }
  return comprobacion;
}

//por el metodo de los exponentes busca en las posiciones donde hayan 1
//para luego elevarlos 2^exponente y tener la suma que sería el resultado del valor decimal
function bin_decimal(numero_binario){
  var exponente = 0;
  var numero_decimal = 0;
  //El metodo recorre el numero desde el ultimo hasta el primero 1110 = 0111
  for (var i = numero_binario.length-1; i>= 0; i--) {
    if (numero_binario[i]== 1) {
      numero_decimal = numero_decimal + Math.pow(2,exponente);
    }
       exponente++;
  }
       return numero_decimal;
}
