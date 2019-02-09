
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

//Ejercicio 97

//Sumar los números del 0 al 1000
//Cortar la ejecución si la suma es superior a 100
//Mostrar el resultado final en consola

/*
var alumnas = [
    'Maria',
    'esther',
    'consuelo',
    'Barbara',
    'Luisana',
    'pancracia',
    'luzbelita',
    'Jimena'
   ]*/
