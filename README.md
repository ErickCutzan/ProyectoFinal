> ### Funcionamiento del programa

1. Al iniciar el programa este pide al asegurado su nombre y este
   lo ingresa en un espacio asignado para el mismo.

2. A continuación le pide al asegurado que ingrese su edad.

   2.1 Dependiendo de la edad del asegurado, si este es menor de edad
       el programa se detiene, si es mayor de edad el programa continúa.

3. Luego se le pregunta al asegurado si está casado. En el espacio
   en blanco asignado se encuentra un “si/no” con el propósito de
   orientar al asegurado del tipo de respuesta requerida.

   3.1 En caso de ser afirmativo se le pregunta al asegurado la edad del
       cónyuge, en caso contrario el programa salta a la siguiente pregunta.

4. Luego se le pregunta al asegurado si tiene hijos. En el espacio en
   blanco asignado se encuentra un “si/no” con el propósito de orientar
   al asegurado del tipo de respuesta requerida.

4.1 En caso de ser afirmativo se le pregunta al asegurado cuántos hijos
    tiene, en caso contrario el programa salta a la siguiente pregunta.

5. Luego de esta serie de preguntas el programa empieza a calcular todos
   los recargos según las respuestas dadas en base a los parámetros
   asignados para la edad y cantidad de hijos y estos los aplicará a
   a la cotización. Estos son los recargos:
   Recargo por edad
   Recargo por cónyuge según edad del mismo. (si lo tiene)
   Recargo por cantidad de hijos (si los tuviese)
6. Almacena todos los recargos y al final le muestra al asegurado:
   Nombre cliente/asegurado
   Detalle cotización
   Precio base
   Recargos
   Edad del asegurado
   Casado/a edad del conyuge (en caso de estar soltero, el recargo será Q0)
   Cantidad de hijos (en caso de no tener hijos, el recargo será Q0)
   Total recargos
   Precio total de la cotización


> ### Partes del problema a considerar

> #### Recargos
1. Edad del asegurado titular
   De 18 a 24 se hace un recargo del 10% del precio base(Q2,000)
   De 25 a 49 se hace un recargo del 20% del precio base(Q2,000)
   De 50 años ó mas se hace un recargo del 30% del precio base(Q2,000)
2. Si está casado/a o no y dependiendo de la edad del cónyuge del
   asegurado titular
   Se aplica para el cónyuge del asegurado (sí lo tuviera) los mismos
   rangos de edades que para el asegurado y este genera un recargo que se
   agrega a la cotización del asegurado titular.
3. Cantidad de hijos del asegurado titular
   Se agrega un recargo por cada hijo que quiera asegurar el asegurado
   titular. (20% del precio base por cada hijo)
4. El único recargo extra obligatorio será por la edad del asegurado titular (inciso 1)
   Ya que puede estar soltero/a con/sin hijos ó casado/a con/sin hijos.
5. Todos los recargos anteriores son acumulativos e irán cargados en la
   cotización del asegurado titular.


> ### Que se podría mejorar sobre el programa

- Mejorar la interfaz grafica utilizando un formulario para llenarlo
  con mayor detalle y rapidez.
- Agregar una opción para enviar cotización por correo electrónico
