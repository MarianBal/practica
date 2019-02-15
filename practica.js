
console.log('Hola Mundo');

//-----------------------------------

//Ejercicio 66

//Mostrar en consola los números del 0 al 10 utilizando la estructura while
/*
var numero = 0;

while (numero <= 10){

    console.log (numero);
    numero = numero + 1;
}

*/

//-----------------------------------

//Ejercicio 67

//Mostrar en consola los números del 100 al 0 utilizando la estructura while
/*
var numero = 100;

while (numero>= 0){

    console.log(numero);
    numero = numero-1;
}
*/
//-----------------------------------

//Ejercicio 68

//Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while
/*
var numero = 0;

while (numero <= 1000){

    console.log(numero);
    numero= numero + 2;
}
*/

//-----------------------------------

//Ejercicio 69

//Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 utilizando la estructura while.
/*
var numeroUno = 0;

var numeroDos = 1;

while(numeroDos <= 1000){

    console.log(numeroUno + numeroDos);

    numeroUno = numeroUno + numeroDos;
    numeroDos = numeroDos +1;
}
*/

//-----------------------------------

//Ejercicio 70

//Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 utilizando la estructura while.

/*

var numeroUno = 0;

var numeroDos = 1;

while(numeroDos <= 10){

    console.log(numeroUno + numeroDos);

    numeroUno = numeroUno + numeroDos;
    numeroDos = numeroDos +2;
}

*/

//-----------------------------------

//Ejercicio 71

//Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while
/*
var numero = 0;

while (numero<=10){
    console.log(numero*9);
    numero++;
}
*/

//-----------------------------------

//Ejercicio 72

//Mostrar en consola el siguiente dibujo utilizando la estructura while

/*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */
/* 
var asterisco = '*';


while(asterisco.length<=13){

    console.log(asterisco);
    
    asterisco = asterisco + '*';
    
} */

//-----------------------------------

//Ejercicio 73

/* Mostrar en consola el siguiente dibujo utilizando la estructura while

*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
* */
/*
var asterisco = '*************';

var contador = 12;


while(contador>=0){

    console.log(asterisco);

    

    asterisco= asterisco.slice(0,contador);

    contador--;    

}
*/

//-----------------------------------

//Ejercicio 74

//Mostrar en consola el siguiente dibujo utilizando la estructura while
/*
*
***
*****
*******
*********
***********
*************
*/
/*
var asterisco = '*';

while(asterisco.length<13){
    console.log(asterisco);
    asterisco = asterisco + '**';
}
*/

//-----------------------------------

//Ejercicio 75

//Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
/*
var numeroUno = 0;

var numeroDos = 1;

var contador =1;

console.log(numeroUno);
console.log(numeroDos);

while(contador<=8){
    var resultado = numeroUno + numeroDos; 

    console.log(resultado);
    numeroUno=numeroDos;
    numeroDos = resultado;

    contador++;
    
}
*/

//-----------------------------------

//Ejercicio 76

//Modificar el código utilizando la estructura do/while en lugar de while
/*
var numero = 0;

do{
    console.log(numero);
    numero = numero + 1;

}

while (numero <= 10){

}
*/
//-----------------------------------

//Ejercicio 77

//Modificar el código utilizando la estructura do/while en lugar de while
/*
var numero = 100;

do{
     console.log(numero);
    numero = numero-1;

}

while (numero>= 0){
   
}
*/
//-----------------------------------

//Ejercicio 78

//Modificar el código utilizando la estructura do/while en lugar de while

/*
var numero = 0;

do{

    console.log(numero);
    numero= numero + 2;

}

while (numero <= 1000){

}
*/

//-----------------------------------

//Ejercicio 79

//Modificar el código utilizando la estructura do/while en lugar de while
/*
var numeroUno = 0;

var numeroDos = 1;

do{

    console.log(numeroUno + numeroDos);

    numeroUno = numeroUno + numeroDos;
    numeroDos = numeroDos +1;

}

while(numeroDos <= 1000){

}
*/

//-----------------------------------

//Ejercicio 80

//Modificar el código utilizando la estructura do/while en lugar de while


/*
var numeroUno = 0;

var numeroDos = 1;

do{

    console.log(numeroUno + numeroDos);

    numeroUno = numeroUno + numeroDos;
    numeroDos = numeroDos +2;

}

while(numeroDos <= 10){

}
*/

//-----------------------------------

//Ejercicio 81

//Mostrar en consola la tabla de multiplicar del 9 (de 1 a 10) utilizando la estructura while
/*
var numero = 0;

do{
    console.log(numero*9);
    numero++;

}

while (numero<=10){

}
*/
//-----------------------------------

//Ejercicio 82

//Mostrar en consola el siguiente dibujo utilizando la estructura while

/*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */
/*
var asterisco = '*';

do{

    console.log(asterisco);
    
    asterisco = asterisco + '*';
}

while(asterisco.length<=13){
    
} */



//-----------------------------------

//Ejercicio 83

/* Mostrar en consola el siguiente dibujo utilizando la estructura do while

*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
* */

/*
var asterisco = '*************';

var contador = 12;

do{

    console.log(asterisco);

    

    asterisco= asterisco.slice(0,contador);

    contador--;  

}
while(contador>=0){
}
*/


//-----------------------------------

//Ejercicio 84


//Mostrar en consola el siguiente dibujo utilizando la estructura do while
/*
*
***
*****
*******
*********
***********
*************
*/
/*
var asterisco = '*';
do{

    console.log(asterisco);
    asterisco = asterisco + '**';

}

while(asterisco.length<13){
    
}
*/


//-----------------------------------

//Ejercicio 85

//Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura while
/*
var numeroUno = 0;

var numeroDos = 1;

var contador =1;

console.log(numeroUno);
console.log(numeroDos);

do{

    var resultado = numeroUno + numeroDos; 

    console.log(resultado);
    numeroUno=numeroDos;
    numeroDos = resultado;

    contador++;

}
while(contador<=8){  
}
*/


//-----------------------------------

//Ejercicio 86

//Modificar el código utilizando la estructura for
/*


for(var numero = 0; numero<=10; numero++){

    console.log(numero);
    

}
*/
//-----------------------------------

//Ejercicio 87

//Modificar el código utilizando la estructura do/while en lugar de while
/*

for(var numero = 100; numero>=0; numero--){

    console.log(numero);
}

*/

//-----------------------------------

//Ejercicio 88

//Modificar el código utilizando la estructura do/while en lugar de while
/*

for(var numero= 0; numero<=1000; numero= numero+2){

    console.log(numero);
}
*/

//-----------------------------------

//Ejercicio 89

//Modificar el código utilizando la estructura do/while en lugar de while

//Acá me ayudó Male
/*
var numeroUno= 0;

for (var index = 1; index < 10; index++) {

    console.log(numeroUno + index);
    
    numeroUno=numeroUno+ index;
}
*/

//-----------------------------------

//Ejercicio 90

//Modificar el código utilizando la estructura do/while en lugar de while

/*

var numeroUno = 0;

for(var numeroDos = 1; numeroDos <=10; numeroDos = numeroDos +2){
    
    console.log(numeroUno + numeroDos);

    numeroUno = numeroUno + numeroDos;

}
*/


//-----------------------------------

//Ejercicio 91

//Modificar el código utilizando la estructura for en lugar de do/while
/*
for(var numero = 0; numero<=10; numero ++){

    console.log(numero*9);

}
*/

//-----------------------------------

//Ejercicio 92

//Mostrar en consola el siguiente dibujo utilizando la estructura for

/*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */

/*

var asterisco = '*';

for(var largo = asterico.length; largo<= 13;  ){

    console.log(asterisco);

    asterisco = asterisco + '*';
}*/

//-----------------------------------

//Ejercicio 93

/* Mostrar en consola el siguiente dibujo utilizando la estructura for

*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
* */
/*
var asterisco = '*************';

for(var contador=12; contador>=0; contador--){

    console.log(asterisco);

    asterisco= asterisco.slice(0,contador);

}
*/
   

//-----------------------------------

//Ejercicio 94

//Mostrar en consola el siguiente dibujo utilizando la estructura forS
/*
*
***
*****
*******
*********
***********
*************
*/
/*
for(var asterisco = '*'; asterisco.length<13; asterisco=asterisco+'**'){
  
    console.log(asterisco);
}
*/

//-----------------------------------

//Ejercicio 95

//Escribir un programa que muestre en consola la secuencia de Fibonacci para los primeros 10 números utilizando la estructura for
/*
var numeroUno = 0;

var numeroDos = 1;

console.log(numeroUno);
console.log(numeroDos);

for(var contador=1; contador<=8; contador++){

    var resultado = numeroUno + numeroDos;
    console.log(resultado);
    numeroUno=numeroDos;
    numeroDos = resultado;

}

*/

//-----------------------------------

//Ejercicio 96

//Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000
/*
for(var numero=0; numero<=10000; numero= numero + 10){

    console.log(numero);
}
*/

//-----------------------------------

//Ejercicio 97

//Mostrar en consola los números desde el 1000 hasta el 0
//Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
/*
for(var numero= 1000; numero>= 0; numero = numero-1){

    if (numero % 10 == 0){

        console.log('**'+numero+'**');

    }else 

        console.log(numero);
}
*/


//-----------------------------------

//Ejercicio 98

//Sumar los números del 0 al 1000
//Cortar la ejecución si la suma es superior a 100
//Mostrar el resultado final en consola

/*
var numero = 0;

for(var i = 1; i<=1000; i++){

    var resultado = numero + i;

    if (resultado > 100){

        console.log(resultado);

        break;

    } else{

        numero = resultado;
    }

}

*/
//-----------------------------------

//Ejercicio 99

//Sumar los números pares del 0 al 10000
//Cortar la ejecución al encontrar 10 números pares
//Mostrar en consola el resultado de los números hasta el momento del corte
/*
var numero = 0;

var contador = 1;

for(var i = 2; i<=1000; i+=2){

    if(contador<=10 ){

        var resultado = numero + i;

        numero = resultado;

        contador++;


    }else{

    console.log(numero);
    
    break;

    }
}
*/

//-----------------------------------

//Ejercicio 100

//Mostrar en consola el siguiente dibujo de un cuadro lleno:
//*****
//*****
//*****
//*****
//*****

/*
var a = '*';

for(var contador= 1; contador<=5; contador++){

    for(var estrella=1; estrella<=5; estrella++){

        a= a+'*';

    }

    console.log(a);

    a='*';
}

*/

//-----------------------------------

//Ejercicio 101

//Mostrar en consola el siguiente dibujo de un cuadrado hueco:
//*****
//*   *
//*   *
//*   *
//*****
/*
var a = '*';

var contador;

for(contador= 1; contador<=5; contador++){

    for(var estrella=1; estrella<=5; estrella++){

        a= a+'*';

        if(contador==2 || contador == 2 || contador == 3){

            b= 
            a(searchvalue, newvalue
        }

    }

    console.log(a);

    a='*';

    
}
*/
//Tenemos que imprimir todos estos nombres con las mayusculas correctas. Es mas rapido si usamos un “for”.
/*
var alumnas = [ 'Maria', 'esther', 'consuelo', 'Barbara', 'Luisana', 'pancracia', 'luzbelita', 'Jimena' ];

for (var i = 0; i<alumnas.length; i++){

    var nombre = alumnas[i];

    var inicial = nombre[0];

    inicial = inicial.toUpperCase();

    nombre = nombre.slice(1,nombre.length);

    console.log(inicial + nombre);
}
*/
/*
var string = ['soy', 'un', 'array', 'de', 'strings'];

var arrayDeBooleanos = [['array', 'de'], [1,2]];

var numeros = [1,2.3,4];

var stringsYNumeros = ['uno', 1, 'dos', 2, 'tres', 3];

var primerValor = string[0];

string[0]= 'Hola, soy';

console.log(string[0]);

*/
///----------------------------------------------------------------------------------------------------------------------------------------------------------

//ARRAYS



//-----------------------------------

//Ejercicio 002

//Declarar una variable bandas y asignarle un array con tus bandas favoritas (al menos 10).

//Guardar en variables el valor del primer, tercer y sexto elemento del array.

//Mostrar por consola los siguientes 3 mensajes:

//La banda en primer lugar es: [NOMBRE_DE_LA_PRIMER_BANDA]
//La banda en tercer lugar es: [NOMBRE_DE_LA_TERCER_BANDA]
//La banda en sexto lugar es: [NOMBRE_DE_LA_SEXTA_BANDA]
/*

var bandas = ['Led Zeppelin', 'Divididos', 'Ghost', 'Iron Maiden', 'Pink Floyd', 'Foo figthers', 'Sumo'];

console.log(bandas[0]);

console.log(bandas[2]);

console.log(bandas[5]);

*/

//-----------------------------------

//Ejercicio 004


//Crear el siguiente array con el nombre datos: [27, true, 'La edad de la persona es: ']
//Si el segundo item en el array datos es verdadero entonces
//Mostrar en consola: La edad de la persona es: 27
//Utilizar el primer y último item del array datos para formar el string del mensaje pedido
/*
var datos = [27, true, 'La edad de la persona es: '];

if(datos[1]== true){
    console.log(datos[2], datos[0]);
}*/


//-----------------------------------

//Ejercicio 008

//Declarar una variable etiquetasHtml con varios de los nombres de las etiquetas de HTML que ya conocés
//Mostrar en consola el nombre de la 2da etiqueta del array en mayúsculas
//Mostrar en consola el nombre de la 5ta etiqueta del array en minúsculas
//Mostrar en consola la cantidad de etiquetas guardadas en el array
/*
var etiquetasHtml = ['nav', 'header', 'Footer', 'navbar', 'button', 'textArea', 'H1', 'H2', ];

console.log(etiquetasHtml[1].toUpperCase());

console.log(etiquetasHtml[4].toLowerCase());

console.log(etiquetasHtml.length);

*/
/*
var strings = ['soy', 'un', 'array', 'de', 'strings'];

console.log(strings);

strings.push('Hola');
console.log(strings);
*/
/*
var strings = ['soy', 'un', 'array', 'de', 'strings'];

console.log(strings);
strings.unshift('primero');
console.log(strings);

strings.shift();
console.log(strings.shift());

console.log(strings);

strings.pop();
console.log(strings.length);

console.log(strings.pop());

*/
/*
var stringsDesordenados = ['zeta', 'xilofon', 'agua', 'aaab'];

console.log(stringsDesordenados.sort());
*//*

var numerosDesordenados = [4,2,3,1];

console.log(numerosDesordenados.sort());

*/

//Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
//Eliminar el primer elemento, y agregarlo al final del array.
//Mostrar el resultado final.

var numeros = [6, 1, 2, 3, 4, 5];

numeros.shift();

numeros.push(6);

console.log(numeros);