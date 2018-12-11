function principal(){
  var opcion = document.getElementById("opciones").value;
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;

  if(comprobarNumeroBinario(numero1+"") != true && comprobarNumeroBinario(numero2+"") != true){
     numero1 = parseInt(document.getElementById("numero1").value);
     numero2 = parseInt(document.getElementById("numero2").value);
    if(opcion == "suma"){
      numero_1 = bin_decimal(numero1+"");
      numero_2 = bin_decimal(numero2+"");
      var resultado= parseInt(suma(numero_1, numero_2));
      var binario = resultado.toString(2);
        document.getElementById("respuesta").innerHTML = "RESULTADO EN BINARIO: "+binario+" RESULTADO EN DECIMAL: "+ numero_1+"+"+numero_2+"="+resultado;
    }

    if(opcion == "resta"){
      numero_1 = bin_decimal(numero1+"");
      numero_2 = bin_decimal(numero2+"");
      var resultado= parseInt(resta(numero_1, numero_2));
      var binario = resultado.toString(2);
      document.getElementById("respuesta").innerHTML = "RESULTADO EN BINARIO: "+binario+" RESULTADO EN DECIMAL: "+ numero_1+"-"+numero_2+"="+resultado;
    }

    if(opcion == "multiplicacion"){
      numero_1 = bin_decimal(numero1+"");
      numero_2 = bin_decimal(numero2+"");
      var resultado= parseInt(multiplicacion(numero_1, numero_2));
      var binario = resultado.toString(2);
      document.getElementById("respuesta").innerHTML = "RESULTADO EN BINARIO: "+binario+" RESULTADO EN DECIMAL: "+ numero_1+"*"+numero_2+"="+resultado;
    }

    if(opcion == "division"){
      numero_1 = bin_decimal(numero1+"");
      numero_2 = bin_decimal(numero2+"");
      var resultado= parseInt(division(numero_1, numero_2));
      var binario = resultado.toString(2);
      document.getElementById("respuesta").innerHTML = "RESULTADO EN BINARIO: "+binario+" RESULTADO EN DECIMAL: "+ numero_1+"/"+numero_2+"="+resultado;
    }
  }else{
    alert("Debe ser números binarios");
    document.getElementById("numero1").value ="";
    document.getElementById("numero2").value ="";
  }

}




function suma(numero_1, numero_2){
  return numero_1+numero_2;
}

function resta(numero_1, numero_2){
  return numero_1-numero_2;
}

function multiplicacion(numero_1, numero_2){
  return numero_1*numero_2;
}

function division(numero_1, numero_2){
  return numero_1/numero_2;
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

//Pasa de decimal a entero
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
