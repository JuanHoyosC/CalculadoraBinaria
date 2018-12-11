function codigoHamming(){
  codigo = document.getElementById("palabra_dato").value;
  if (comprobarNumeroBinario(codigo) != true) {
    var tamaño_paridad = 0;
    var tamaño_codigo = codigo.length;
    while (true) {
      if (tamaño_codigo+tamaño_paridad <= Math.pow(2,tamaño_paridad)) {
        break;
      }
      tamaño_paridad++;
    }
    console.log(tamaño_paridad);
    var ham = CalcularHamming(codigo, tamaño_paridad);
    var hamming = Codigo(ham,tamaño_codigo, tamaño_paridad);
    document.getElementById("palabra_codigo").value = hamming;
  }else{

    alert("Debe digitar un numero binario");
    document.getElementById("palabra_dato").value = "";
    document.getElementById("palabra_codigo").value ="";
  }
}

function Codigo(codigo, tamaño,r){
  var hamming = "";
  for (var i = 1; i <= tamaño +r; i++) {
    hamming = hamming + codigo[i];
  }
  return hamming;
}

function CalcularHamming(codigo,  r) {
  var contador_1 = 0, contador_2 = 0, j = 0, contador = 1,pasop, pasog, inicio, pos;
  var ham = [];

  for(var i = 0; i< codigo.length+r+1; i++){
   ham[i]= 0;
  }

   while (contador <= codigo.length + r) {
        contador_2 =  Math.pow(2, contador_1);
        if (contador % contador_2 != 0) {
            ham[contador] =codigo[j];
            j++;
        }else{
            contador_1++;
        }
            contador++;
   }

    contador = 0;
    while (contador < r) {
        pasop =  Math.pow(2, contador);
        pasog = pasop * 2;
        inicio = pasop;
        pos = inicio;
          while (true) {
            for (var k = inicio; k <= inicio + pasop - 1; k++) {
                pos = k;
                if (k > codigo.length + r) {
                    break;
                }
                  ham[pasop] ^= ham[pos];
            }
                if (pos > codigo.length + r) {
                    break;
                } else {
                    inicio = inicio + pasog;
                }
            }
            contador++;
    }
        var mensaje = ham.join("");
         return mensaje;
}

function comprobarNumeroBinario(numero_binario){
  var comprobacion = false;
  for (var i = 0; i < numero_binario.length; i++) {
    if(numero_binario[i] != "1" && numero_binario[i]!= "0"){
      comprobacion = true;
    }
  }
  return comprobacion;
}


//CORREGIT ERRORES

function principal(){
  var posiciones =[];
  var arreglo  =[];
  var numero = document.getElementById("binario_corregir").value;
  if (comprobarNumeroBinario(numero)!= true) {
    var tamaño = numero.length;
    var cantS = tamaño.toString(2).length;
    arreglo = Contador(numero.length);
    var posicion = "";
    for(var i = cantS-1; i >= 0; i--){
      posiciones = syndrome(arreglo, i);
      posicion = XOR(numero, posiciones)+posicion;
    }
    posicion = bin_decimal(posicion);
    document.getElementById("posicion").value = posicion;
  }else{
    alert("Debe digitar solo binarios");
    document.getElementById("binario_corregir").value = "";
    document.getElementById("posicion").value = "";
  }
}

function Contador(tamaño) {
   var matriz = [];
   tamaño_paridad = tamaño.toString(2).length;
   for(var i = 1; i< tamaño+1; i++ ){
       var binario = i.toString(2);
       var ceros = "";
       for(var j = 0; j< tamaño_paridad-binario.length; j++){
        ceros = ceros+"0";
       }
       matriz.push(ceros+binario);
     }
   return matriz;
 }

function XOR (numero, posiciones){
  var posiciones_decimales = [];
  for(var i = 0; i< posiciones.length; i++){
    posiciones_decimales.push(bin_decimal(posiciones[i]));
  }

  var xor = "";
   for(var i = 0; i < posiciones_decimales.length; i++){
     var aux = posiciones_decimales[i]-1;
     xor = xor + numero[aux];
   }

   var cont = 0;
   for(var i = 0; i < xor.length; i++){
       if(xor[i] == "1"){
         cont++;
       }
   }
     var paridad = "";
     if(cont % 2 == 0){
       paridad =  "0";
     }else{
       paridad =  "1";
     }
  return paridad;
}

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

function syndrome (arreglo, posicion){
  var syn = [];
  for(var i = 0; i< arreglo.length; i++){
    var numero = arreglo[i];
     if(numero[posicion] == "1"){
        syn.push(numero);
        }
  }
  return syn;
}
