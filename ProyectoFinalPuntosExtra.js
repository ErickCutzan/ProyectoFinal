//*** Cargar función realizar_cotizaciones() ***
function realizar_cotizaciones(){

  //Variables utiles
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%
var propiedades_recargo = 0.35 // 35%
var salario_recargo = 0.05 // 5%

//Recargos
var recargo_edad= 0
var recargo_conyuge = 0
var recargo_cantidad_hijos = 0
var recargo_cantidad_propiedades = 0
var recargo_salario = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//******** Mensajes de alerta para ingresar datos **********//
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad >= 18){  // si es menor de edad el programa se detiene
  
var casado = prompt("¿Está casado actualmente?", "si/no")

//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene? Ingrese solamente números")
}
/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantidad_hijos_numero = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}
  
//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Recargo por edad del asegurado: de 18 a 24 años
if(edad_numero >= 18 && edad_numero <= 24){  
//Calculamos el recargo en base a la edad 
   recargo_edad = precio_base * edad_18

//De 25 a 49 años 
}else if(edad_numero >= 25 && edad_numero <= 49){
  recargo_edad = precio_base * edad_25

//De 50 años en adelante
}else if(edad_numero >= 50){
  recargo_edad = precio_base * edad_50
}  
  
/** 
 * 2. Recargo por la edad del cónyuge
 */
if(casado = "SI"){
//De 18 a 24 años  
if(edad_conyuge_numero >= 18 && edad_conyuge_numero <= 24){  
//Calculamos el recargo en base a la edad 
   recargo_conyuge = precio_base * casado_18
   
//De 25 a 49 años    
}else if(edad_conyuge_numero >= 25  && edad_conyuge_numero <= 49){  
   recargo_conyuge = precio_base * casado_25
   
//De 50 años en adelante   
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
  
//Extra - Recargo por cantidad de propiedades en caso de ser afirmativo
  
var propiedades = prompt("¿Tiene Propiedades para asegurar?", "si/no")

//Comprobamos la cantidad de propiedades solamente si las tiene
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = prompt("¿Cuantas propiedades tiene?" +"\n" +
                                "Ingrese solamente números")
}
var cantidad_propiedades_numero = 0
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades_numero = parseInt(cantidad_propiedades)
}  
//Calculamos recargo propiedades
  if(propiedades = "SI"){
  recargo_cantidad_propiedades = (precio_base * propiedades_recargo) * cantidad_propiedades_numero
}                                
  
  
//Extra - Recargo sobre salario asegurado
var salario = prompt("¿Desea declarar su salario?", "si/no")

//Comprobamos si el asegurado desea declarar su salario
var cantidad_salario
if("SI" == salario.toUpperCase()){
  cantidad_salario = prompt("¿Cual es su salario?"+"\n" +
                       "Ingrese solamente números")
}
var cantidad_salario_numero = 0
if("SI" == salario.toUpperCase()){
  cantidad_salario_numero = parseInt(cantidad_salario)
}  
//Calculamos recargo sobre salario
  if(salario = "SI"){
  recargo_salario = (cantidad_salario_numero * salario_recargo)
}    
    
//Aquí es donde debe de calcular los recargos y el valor final  
//Recargo total = recargo por edad + recargo por conyuge + recargo por hijos
//+recargo por propiedades + recargo sobre salario
  
//Precio final = precio base + recargo total
  recargo_total = recargo_edad + recargo_conyuge + recargo_cantidad_hijos + recargo_cantidad_propiedades + recargo_salario
  precio_final = precio_base + recargo_total

//Resultado
  alert ("Para el cliente/asegurado: "+nombre+"\n" +       
       "Detalle cotización" +"\n" +
       "Precio base: Q"+precio_base+"\n" +
       "Recargos" +"\n" +
       "Edad del asegurado: Q"+recargo_edad+"\n" +
       "Casado/a edad del conyuge: Q"+recargo_conyuge+"\n" +
       "Cantidad de hijos/as: Q"+recargo_cantidad_hijos+"\n" +
       "Cantidad de propiedades: Q"+recargo_cantidad_propiedades+"\n" +
       "Recargo sobre salario: Q"+recargo_salario+"\n" +
       "Total recargos: Q"+recargo_total+"\n" +
       "El precio total será de: Q"+precio_final)

}else{
  alert("La persona a asegurar tiene que ser mayor de edad")
}
}

//*** Ejecutar función realizar_cotizaciones() ***
realizar_cotizaciones()

//*** Realizar mas cotizaciones hasta que el usuario ingrese la palabra "salir" ***//
var mas_cotizaciones = prompt("Desea realizar otra cotización?" +"\n" +
                              "Escriba 'si' ó presione 'enter' para continuar" +"\n" +
                              "ó escriba 'salir' para cancelar.")
//Convertir palabra "salir" a mayúscula
mas_cotizaciones = mas_cotizaciones.toUpperCase()

//noprotect
while(mas_cotizaciones != "SALIR"){
realizar_cotizaciones()
mas_cotizaciones = prompt("Desea realizar otra cotización?" +"\n" +
                              "Escriba 'si' ó presione 'enter' para continuar" +"\n" +
                              "ó escriba 'salir' para cancelar.")

mas_cotizaciones = mas_cotizaciones.toUpperCase()
}  
  





