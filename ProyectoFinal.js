//Variables utiles
//Precio base de la cotizaci�n, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargos
var recargo_edad= 0
var recargo_conyuge = 0
var recargo_cantidad_hijos = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//******** Mensajes de alerta para ingresar datos **********//
var nombre = prompt("Ingrese su nombre, por favor")

var edad = prompt("�Cuantos a�os tiene? Ingrese solamente n�meros ")
if(edad >= 18){  // si es menor de edad el programa se detiene
  
var casado = prompt("�Est� casado actualmente?", "si/no")

//Comprobamos la edad del c�nyuge, solamente si se est� casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("�Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a n�meros 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

//convirtiendo la edad del c�nyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("�Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("�Cuantos hijos tiene? Ingrese solamente n�meros")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos_numero = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
  
//Aqu� debe calcular el recargo total basado en las respuestas ingresadas

//Recargo por edad del asegurado: de 18 a 24 a�os
if(edad_numero >= 18 && edad_numero <= 24){  
//Calculamos el recargo en base a la edad 
   recargo_edad = precio_base * edad_18

//De 25 a 49 a�os 
}else if(edad_numero >= 25 && edad_numero <= 49){
  recargo_edad = precio_base * edad_25

//De 50 a�os en adelante
}else if(edad_numero >= 50){
  recargo_edad = precio_base * edad_50
}  
  
/** 
 * 2. Recargo por la edad del c�nyuge
 */
if(casado = "SI"){
//De 18 a 24 a�os  
if(edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24){  
//Calculamos el recargo en base a la edad 
   recargo_conyuge = precio_base * casado_18
   
//De 25 a 49 a�os    
}else if(edad_conyuge_numero >= 25  && edad_conyuge_numero <= 49){  
   recargo_conyuge = precio_base * casado_25
   
//De 50 a�os en adelante   
}else if(edad_conyuge_numero >= 50){  
   recargo_conyuge = precio_base * casado_50
}
}

/**
 * 3. Recargo por la cantidad de hijos en caso de ser afirmativo
 */ 
  if(hijos = "SI"){
  recargo_cantidad_hijos = (precio_base * hijos_recargo) * cantidad_hijos_numero 
}    

//Aqu� es donde debe de calcular los recargos y el valor final  
//Recargo total = recargo por edad + recargo por conyuge + recargo por hijos
//Precio final = precio base + recargo total
  recargo_total = recargo_edad + recargo_conyuge + recargo_cantidad_hijos
  precio_final = precio_base + recargo_total

//Resultado
  alert ("Para el cliente/asegurado: "+nombre+"\n" +       
       "Detalle cotizaci�n" +"\n" +
       "Precio base: Q"+precio_base+"\n" +
       "Recargos" +"\n" +
       "Edad del asegurado: Q"+recargo_edad+"\n" +
       "Casado/a edad del conyuge: Q"+recargo_conyuge+"\n" +
       "Cantidad de hijos/as: Q"+recargo_cantidad_hijos+"\n" +
       "Total recargos: Q"+recargo_total+"\n" +
       "El precio total ser� de: Q"+precio_final)

}else{
  alert("La persona a asegurar tiene que ser mayor de edad")
}







