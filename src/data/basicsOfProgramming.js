import dataTypes from '../media/img/basicsOfProgramming/dataTypes.png'
import variables from '../media/img/basicsOfProgramming/variables.png'
import conditionalStructures from '../media/img/basicsOfProgramming/conditionalStructures.png'
import loops from '../media/img/basicsOfProgramming/loops.png'
import functions from '../media/img/basicsOfProgramming/functions.png'

export const basicsOfProgramming = [
  {
    id: '1',
    title: '¿QUE SE ENTIENDE POR PROGRAMACIÓN?',
    text: 'LA <span class="text-indigo-600 font-bold">PROGRAMACIÓN</span> es el conjunto de tareas, entre ellas el <span class="text-indigo-600 font-bold">código</span>, que sirven para crear un <span class="text-indigo-600 font-bold">programa/aplicación</span> que realice una tarea o solucione un problema. <br> Básicamente, imagina que estamos en un videojuego y estamos <span class="text-indigo-600 font-bold">controlando</span> a nuestro personaje. Si queremos <span class="text-indigo-600 font-bold">desplazarnos hacia la izquierda</span>, nosotros pulsamos una <span class="text-indigo-600 font-bold">tecla</span> o el joystick del <span class="text-indigo-600 font-bold">mando</span> para indicarle que se mueva hacia la izquierda. El personaje "virtual" para moverse necesita <span class="text-indigo-600 font-bold">entender esa acción</span> del mando a la consola. Esto lo hace la programación. <span class="text-indigo-600 font-bold">Escribimos</span> la orden en un lenguaje de programación, estas órdenes se <span class="text-indigo-600 font-bold">compilan</span> (traducen a 0&#39;s y 1&#39;s) para que lo <span class="text-indigo-600 font-bold">entienda</span> la máquina y por último, se <span class="text-indigo-600 font-bold">ejecuta</span> la acción.',
  },
  {
    id: '2',
    title: 'VARIABLES',
    text: 'LAS <span class="text-indigo-600 font-bold">VARIABLES</span> son &#39;cajas&#39; donde <span class="text-indigo-600 font-bold">almacenamos información</span> (datos de algún tipo). A estas &#39;cajas&#39; se les asignan <span class="text-indigo-600 font-bold">nombres comunes</span> del lenguje humano para identificar que sentido u objetivo tienen. <br> Por ejemplo, si queremos guardar en nuestro programa la edad de &#39;Pepito&#39;, crearemos una variable llamada <span class="text-indigo-600 font-bold">&#39;pepitoEdad&#39;</span>  con su edad. <br> Estas variables se pueden usar para <span class="text-indigo-600 font-bold">informar al usuario</span> de algo, en<span class="text-indigo-600 font-bold"> operaciones matemáticas</span> o simplemente para <span class="text-indigo-600 font-bold">preguntar</span> sobre su valor y dependiendo de eso, que ocurra una cosa u otra.',
    extra: variables,
  },
  {
    id: '3',
    title: 'TIPOS DE DATOS',
    text: 'En el mundo de la programación se usan diferentes <span class="text-indigo-600 font-bold">tipos de datos</span> para representar información. Los mas básicos son: <span class="text-indigo-600 font-bold">int</span> (número), <span class="text-indigo-600 font-bold">char</span> (carácter), <span class="text-indigo-600 font-bold">booleano</span> (verdadero o falso), <span class="text-indigo-600 font-bold">string</span> (texto). <br> Además, los lenguajes de programación permiten tener <span class="text-indigo-600 font-bold">múltiples datos</span> en una <span class="text-indigo-600 font-bold">colección</span>. Existen, entre otros, las <span class="text-indigo-600 font-bold">LISTAS</span> (elementos repetidos), los <span class="text-indigo-600 font-bold">CONJUNTOS</span> (elementos no repetidos), los <span class="text-indigo-600 font-bold">ARRAY</span> (elementos con posiciones), los <span class="text-indigo-600 font-bold">DICCIONARIOS</span> (elementos que son un par clave-valor), etc. Estas colecciones <span class="text-indigo-600 font-bold">contienen al mismo tiempo</span> muchos datos del mismo tipo (algunos lenguajes permiten mezclar tipos), por ejemplo, una lista de los números del 1 al 5 -> (1,2,3,4,5)',
    extra: dataTypes,
  },
  {
    id: '4',
    title: 'ESTRUCTURAS CONDICIONALES',
    text: 'LAS <span class="text-indigo-600 font-bold">ESTRUCTURAS CONDICIONALES</span> comparan una variable contra otro(s) valor(es), para que en base al resultado de esta comparación, se <span class="text-indigo-600 font-bold">siga un camino u otro</span> dentro del programa. <br> ¿Cómo funciona esto realmente? La estructura condicional mas común es el <span class="text-indigo-600 font-bold">IF-ELSE (si algo - si no, lo otro)</span>, y compara dos valores, variables o datos, y devuelve un resultado <span class="text-indigo-600 font-bold">BOOLEANO (verdadero o falso)</span>. <br> Por ejemplo, queremos ver si nos queda dinero en el banco para ir a hacer la compra. Entonces preguntamos, si tengo dinero en el banco (verdadero BOOLEANO) -> compra, si no (falso BOOLEANO), no compramos.',
    extra: conditionalStructures,
  },
  {
    id: '5',
    title: 'BUCLES',
    text: '<span class="text-indigo-600 font-bold">LOS BUCLES</span> son trozos de códigos, llamadas tambien <span class="text-indigo-600 font-bold">estructuras de control</span>, donde se <span class="text-indigo-600 font-bold">realiza una acción</span> o parte del programa <span class="text-indigo-600 font-bold">repetidamente</span> hasta cumplir una condición. Los más conocidos son: el bucle <span class="text-indigo-600 font-bold">FOR</span> (para), <span class="text-indigo-600 font-bold">WHILE</span> (mientras), <span class="text-indigo-600 font-bold">DO-WHILE</span> (ejecuta-mientras), etc. El bucle FOR se encarga de <span class="text-indigo-600 font-bold">empezar en una variable</span> (o número), <span class="text-indigo-600 font-bold"> cumplir una condición para continuar, y modificar la variable en que se empieza</span>. WHILE realiza una acción <span class="text-indigo-600 font-bold">mientras se cumpla una condición</span>. Por último, el bucle DO-WHILE, <span class="text-indigo-600 font-bold">ejecuta</span> las sentencias al igual que WHILE pero <span class="text-indigo-600 font-bold">antes de preguntar</span> por la condición, <span class="text-indigo-600 font-bold">ejecuta</span> la acción (en WHILE se pregunta antes).',
    extra: loops,
  },
  {
    id: '6',
    title: 'FUNCIONES',
    text: '<span class="text-indigo-600 font-bold">LAS FUNCIONES</span> son secciones del código donde se puede realizar una serie de acciones con un único fin y objetivo. Es decir, si necesitamos sumar dos números, podemos crear una función para que se pueda &#39;llamar&#39; en cualquier parte del programa y hacer uso de ella. <br> Lo más potente que tienen las funciones son los <span class="text-indigo-600 font-bold">parámetros</span>. Un parámetro es una <span class="text-indigo-600 font-bold">variable</span> que la función &#39;recoge&#39; y hacer uso de ella &#39;dentro&#39; de la función. Las funciones pueden recibir <span class="text-indigo-600 font-bold">ninguno, uno o múltiples</span> parámetros. Al final de la función, se añade la palabra <span class="text-indigo-600 font-bold">return</span> (devolver) que es el <span class="text-indigo-600 font-bold">valor que acaba devolviendo</span> la función como respuesta. A veces puede ocurrir que no se devuelva <span class="text-indigo-600 font-bold">nada</span>.',
    extra: functions,
  },
  {
    id: '7',
    title: 'ALGORITMOS',
    text: '<span class="text-indigo-600 font-bold">UN ALGORITMO</span> informático es un <span class="text-indigo-600 font-bold">conjunto de instrucciones definidas</span>, <span class="text-indigo-600 font-bold">ordenadas</span> y <span class="text-indigo-600 font-bold">planificadas</span> para resolver un problema, realizar un cálculo o desarrollar una tarea. Es decir, es un <span class="text-indigo-600 font-bold"> procedimiento paso a paso para conseguir un fin</span>.<br> Cuando los programadores decimos &#39;hay que pensar un algoritmo&#39; nos referimos a que tenemos que idear o pensar un procedimiento para obtener un resultado necesario. ¿Qué significa esto? Por ejemplo, se podría considerar un algoritmo aquello que <span class="text-indigo-600 font-bold">recupera datos de un usuario, aplica una formula y el resultado lo guarda en la base de datos</span>. Como se puede percatar, se sigue un <span class="text-indigo-600 font-bold">modelo ENTRADA(input)-PROCESO-SALIDA(output)</span>. Los algoritmos <span class="text-indigo-600 font-bold">son muy importante</span> en el mundo de la programación y es muy útil saber manejarlos (los existentes) y crearlos. <br> Además, existe una rama en la informática muy interesante e importante que trata de coger algoritmos y mejorarlos para que sean mas eficientes según el problema, esto se llama <span class="text-indigo-600 font-bold">ALGORITMIA</span>.',
  },
]
