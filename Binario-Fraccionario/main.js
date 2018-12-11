
  var repetidos = new Array;
  var array = new Array;
  //Metodo que el boton llama para convertir de decimal a binario fraccionario
  function fraccion(){
    array=[];
    repetidos=[];
    var binario_fraccionario;
    var numero_fraccionario = document.getElementById("numero_fraccionario").value;
    // Si el numero no es fraccion le agregra un .0
    if (verificar(numero_fraccionario) == 0 && numero_fraccionario != "") {
      numero_fraccionario = numero_fraccionario+".0";
    }
    auxiliar_fraccionario = numero_fraccionario.split(".");
    auxiliar = auxiliar_fraccionario[0]+auxiliar_fraccionario[1];

        if(verificarSoloNumeros(auxiliar)==0 && verificarSoloNumeros(numero_fraccionario) <= 1){
          // si el numero si tiene fraccion lo dividira entre los dos numeros antes y despues del punto
          var numero_fraccionario = numero_fraccionario.split(".");
          // si antes del punto es un 0 ese será el mismo en binario si no llamara la funcion para convertir a binario
          if (numero_fraccionario[0]== 0){
              binario_fraccionario = "0";
          }else{
              llenarArray(numero_fraccionario[0]);
              var binario_fraccionario = convertir();
          }
          //si el segundo numero es un 0 ese será su numero en binario si no se llamara la funcion para convertir en binario
          if (numero_fraccionario[1] == 0) {
            binario_fraccionario = binario_fraccionario+".0";
          }else {
            binario_fraccionario = binario_fraccionario+"."+convertirFraccion(numero_fraccionario[1]);
          }
          document.getElementById("numero_binarioFraccionario").value = binario_fraccionario;
         }else{
           alert("Debe digitar un número decimal fraccionario");
           document.getElementById("numero_binarioFraccionario").value = "";
           document.getElementById("numero_fraccionario").value = "";
         }
}
  //Convierte un binario fraccionario a un decimal fraccionario
  function fraccion_binario(){
    var bin_fraccionario =document.getElementById("binario_fraccionario").value;
    if (bin_fraccionario != "") {
      if (!verificarBinario(bin_fraccionario)) {
        if (!verificar(bin_fraccionario)) {
          bin_fraccionario = bin_fraccionario +".0";
        }
        bin_fraccion = bin_fraccionario.split(".");
        var decimal = bin_decimal(bin_fraccion[0]);
        decimal = decimal + binarioFraccion_decimal(bin_fraccion[1]);
        document.getElementById("decimal_fraccionario").value = decimal;
      }else{
        alert("Debe digitar un número binario");
        document.getElementById("decimal_fraccionario").value = "";
        document.getElementById("binario_fraccionario").value = "";
      }
    }else{
      alert("Debe digitar un número binario");
      document.getElementById("decimal_fraccionario").value = "";
      document.getElementById("binario_fraccionario").value = "";
    }
  }

  function verificarSoloNumeros(numero_fraccionario){
    var key = contador = 0;
    var vector = [0,1,2,3,4,5,6,7,8,9];
    for (var i = 0; i < numero_fraccionario.length; i++) {
      var key2 = false;
       for (var j = 0; j < vector.length; j++) {
           if (numero_fraccionario[i]!=vector[j]) {
           }else{
             key2 = true;
           }
       }
       if(key2 == false){
         contador++;
       }
    }
    return contador;
  }

  //Verifica si el numero es un binario fraccionario
  function verificarBinario(numero_fraccionario){
    var key = false;
    for (var i = 0; i < numero_fraccionario.length; i++) {
      if (numero_fraccionario[i] != "0" && numero_fraccionario[i] != "1" &&
            numero_fraccionario[i] != ".") {
         key = true;
      }
    }
    return key;
  }

  //Verifica si es un decimal fraccionario
  function verificar(numero_fraccionario){
    var contador = 0;
    for (var i = 0; i < numero_fraccionario.length; i++) {
       if (numero_fraccionario[i] == ".") {
         contador ++;
       }
    }
    return contador;
  }

  //Funcion que convierte lo .4676 en binario
  function convertirFraccion(numero){
    var bin = "";
    var contador= 0;
    var tamaño = 0;
    var limite_maximo = 0;
    while(numero != 0 && tamaño!=  1 && contador == 0 && limite_maximo != 300){
          var fraccion = "0."+numero;
          numero = parseFloat(fraccion);
          bin =bin + Math.floor(numero*2);
          numero = numero*2;
          fraccion = ""+ numero;
          fraccion = fraccion.split(".");
          numero = fraccion[1];
          tamaño = fraccion.length;
          repetidos.push(numero);
          contador = repeat();
          limite_maximo++;
          }
          return bin;
  }

  //Busca si ya se guardo el mismo numero en un arreglo para no estar en un bucle infinito en el metodo convertirFraccion
  function repeat(){
      var contador = 0;
      for (var i = 0; i < repetidos.length; i++) {
        for (var j = i+1; j < repetidos.length; j++) {
          if (repetidos[i] == repetidos[j]) {
            contador++;
          }
        }
     }
      return contador;
  }

  //Tranforma el .01010110 en decimal
  function binarioFraccion_decimal(numero){
   var suma = 0;
   for(var i = 0; i < numero.length; i++){
     var aux = parseFloat(numero[i]);
     suma = suma+ (aux*(Math.pow(2,(-(i+1)))));
   }
   return suma;
 }
