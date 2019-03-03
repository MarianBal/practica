console.log('Hola Mundo');

//-------------------------------------------------

//Ejercicio fn_001

//Declarar una función que muestre en consola los números pares del 0 al 100
/*
function pares(){
    for (i=0; i<100; i++){
        if(i %2 == 0){
            console.log(i);
        }
    }
}

pares();
*/


//-------------------------------------------------

//Ejercicio fn_002


//Declarar una función que muestre los siguientes datos en consola:
//Tu Nombre
//Edad
//Teléfono
//Calle
//Altura
//Código postal
/*
function datos(){
    console.log('Nombre: Mariana');
    console.log('Edad: 38');
    console.log('TElefono: 2253366');
    console.log('Calle: Lalala');
    console.log('Altura: 2836');
    console.log('Código postal: 1290')
};

datos();
*/


//-------------------------------------------------

//Ejercicio fn_003


//Declarar una variable mostrarNombre y asignar una función
//La función mostrarNombre tiene que mostrar tu nombre en consola con el siguiente formato:
 // =======
 // = Ada =
 // =======
//Ejecutar esta función 2 veces
/*
var mostrarNombre = ['=======', 'Mariana', '======='] ;


function mostrar(){

     console.log(mostrarNombre[0]);
     console.log(mostrarNombre[1]);
     console.log(mostrarNombre[2]);

}

mostrar();
*/


//-------------------------------------------------

//Ejercicio fn_004


//Declarar una variable numerosPares y asignar una función
//La función numerosPares muestra en consola los números pares del 0 al 100
//Ejecutar esta función 5 veces
/*
var numerosPares = function(){

    for (i=0; i<100; i++){
        if(i %2 == 0){
            console.log(i);
        }
    }

}

numerosPares();

*/


//-------------------------------------------------

//Ejercicio fn_005


//Declarar la variable fibonacci y asignar una función como valor
//La función fibonacci tiene que mostrar los primeros 10 números de la secuencia en consola
//Ejecutar esta función 3 veces
/*
var fibonacci = function(){

    var a= 0;
    var b = 1;

    console.log(a);
    console.log(b);

    for(i=0; i<8; i++){
        var resultado = a + b;
        console.log(resultado);
        a = b;
        b = resultado;

    }

}

fibonacci();
fibonacci();
fibonacci();
*/


//-------------------------------------------------

//Ejercicio fn_006


//Crear una función que se llame obtenerNombre y retorne tu nombre como string
//Mostrar en consola el siguiente mensaje: Mi nombre es obtenerNombre()
/*
var nombre = 'Mariana';

function obtenerNombre(){

    return nombre;
}

console.log('Mi nombre es', obtenerNombre());

*/


//-------------------------------------------------

//Ejercicio fn_007


//Crear una función numerosPares
//Dentro de la función, crear un array con los primeros 5 números pares
//Retornar ese array
/*
var pares = [];

function numerosPares(){

    for (i=0; i<10; i++){
        if(i %2 == 0){
            pares.push(i);
        }
    }
    return pares;

}

numerosPares();
console.log(pares);
*/


//-------------------------------------------------

//Ejercicio fn_008


//Crear una función que se llame obtenerNombre y retorne tu nombre como string
//Crear una función llamada obtenerSaludo, que retorne un valor string
//Dentro de esta función obtener tu nombre utilizando la función obtenerNombre(), y guardarlo en una variable nombre
//Retornar un texto de la forma: ¡Hola, nombre!, donde nombre tiene que ser el valor guardado en la variable de arriba.
//Ejecutar la función obtenerSaludo y mostrar el resultado por consola.

/*
function obtenerNombre(){
   
    return 'Mariana'

}

function obtenerSaludo(){

    var nombre = obtenerNombre();

    return console.log('¡Hola', nombre +'!');

}

obtenerSaludo();
*/


//-------------------------------------------------

//Ejercicio fn_009


//Declarar la función obtenerIDUsuario que retorna un valor number con el número 50
//Declarar la función usuarioValido que retorna un valor boolean
//Dentro de esta función obtener el ID del usuario utilizando la función obtenerIDUsuario
//Si el ID del usuario es mayor que 30 retornar falso sino verdadero
//Ejecutar la función usuarioValido y guardar el valor que retorna en una variable llamada elUsuarioEsValido
//SI el elUsuarioEsValido Entonces
//Mostrar el mensaje: El usuario es válido
//SINO
//Mostrar el mensaje: El usuario no es válido
// codear a aca abajo la solución al ejercicio
// crear ambas funciones según el enunciado
/*
function obtenerIDUsuario(){
    var number ='';
    return number = 50;
}

function usuarioValido(){

    if(obtenerIDUsuario()> 30){
        return false;
    }
    else{
        return true;
    }
   
}
var elUsuarioEsValido = usuarioValido();

if (elUsuarioEsValido) {
  console.log('El usuario es válido');
} else {
  console.log('El usuario no es válido');
}

*/


//-------------------------------------------------

//Ejercicio fn_010


//Crear una función llamada mostrarNombreCompleto
//Esta función recibe 2 parámetros nombre y apellido
//Mostrar con console.log() el nombre completo de la persona, concatenando nombre y apellido
//Por ejemplo: si los parámetros son 'Ada' y 'Lovelace', mostrar en consola 'Ada Lovelace'
//Crear una función llamada obtenerNombreCompleto
//Esta función recibe 2 parámetros nombre y apellido
//Retornar el nombre completo de la persona, concatenando nombre y apellido
//Por ejemplo: si los parámetros son 'Grace' y 'Hopper', debe retornar el string resultante 'Grace Hopper'
/*


var firstName = 'Ada';
var lastName = 'Lovelace';

function mostrarNombreCompleto (firstName, lastName){

    console.log(firstName.concat(lastName));

}

function obtenerNombreCompleto(nombre, apellido){

    return nombre + ' ' + apellido

}

console.log(obtenerNombreCompleto('Ada', 'Lovelance'));
console.log(obtenerNombreCompleto('Grace', 'Hopper'));

*/


//-------------------------------------------------

//Ejercicio fn_011


//Copiar el código que se encuentra a continuación, y completar las funciones
//Todo el código de cada función debería ir dentro de las llaves de esa función
/*
function returnString(str) {
  return str;
}

function sum(a, b) {
  return a+b;
}

function res(a, b) {
  return a-b;
}

function mul(a, b) {
  return a*b;
}

function div(a, b) {
  return a/b;
}


console.log( returnString('Ada') === 'Ada' );
console.log( sum(2, 2) === 4 );
console.log( sum(5, -9) === -4 );
console.log( res(4, 3) === 1 );
console.log( res(2, 9) === -7 );
console.log( mul(3, 4) === 12 );
console.log( mul(-2, -5) === 10 );
console.log( div(6, 3) === 2 );
console.log( div(15, 3) === 5 );
// deberias ver
// true
// true
// true
// true
// true
// true
// true
// true
// true

// o según el navegador que sés podés llegar a ver
// (9) true
*/


//-------------------------------------------------

//Ejercicio fn_012


//Copiar el código que se encuentra a continuación, y completar las funciones
//Todo el código de cada función debería ir dentro de las llaves de esa función
/*
function sonIguales(a, b) {
    if(a===b){
        return true;
    }else{
        return false;
    }
}

function tienenLaMismaLongitud(str1, str2) {
    if(str1.length == str2.length){
        return true;
    }else {
        return false;
    }
}

function esMenorQueNoventa(num) {
    if(num<90){
        return true;
    }else{
        return false;
    }
  // retorna true si el parametro de la funcion: num, es menor a 90
  // sino retorna false
}

function esMayorQueCincuenta(num) {
    if(num>50){
        return true;
    }else{
        return false
    }
}

function obtenerResto(a, b) {
    return a % b;
}

function esPar(num) {

    if(num%2 ==0){
        return true;
    }else{
        return false;
    }
}

function esImpar(num) {

    if(num%2 !==0){
        return true;
    }else{
        return false;
    }
}


console.log( sonIguales('Ada', 'ada') === false );
console.log( sonIguales('Ada', 'Ada') === true );

console.log( tienenLaMismaLongitud('ada', 'Ada') === true );
console.log( tienenLaMismaLongitud('ada', 'Grace') === false );

console.log( esMenorQueNoventa(45) === true );
console.log( esMenorQueNoventa(115) === false );
console.log( esMenorQueNoventa(90) === false );

console.log( esMayorQueCincuenta(90) === true );
console.log( esMayorQueCincuenta(45) === false );
console.log( esMayorQueCincuenta(50) === false );

console.log( esPar(5) === false );
console.log( esPar(116) === true );
console.log( esPar(0) === true );
console.log( esPar(-4) === true );

console.log( esImpar(50) === false );
console.log( esImpar(3) === true );
console.log( esImpar(-5) === true );
console.log( esImpar(4) === false );
// deberias ver en la consola todo en true

*/


//-------------------------------------------------

//Ejercicio fn_013


//Copiar el código que se encuentra a continuación, y completar las funciones
//Todo el código de cada función debería ir dentro de las llaves de esa función
/*
function exclamar(str) {
    var nuevoStr = '¡' + str + '!'
    return nuevoStr;
};

function unirNombre(nombre, apellido) {

    var nombreCompleto = nombre + ' ' + apellido;
    return nombreCompleto;
}

function saludar(nombre) {
    var hola = 'Hola ';
    hola = hola.concat(nombre);
    return exclamar(hola);
}

console.log( exclamar('hola') === '¡hola!' );
console.log( exclamar('hola, mundo') === '¡hola, mundo!' );

console.log( unirNombre('Ada', 'Lovelace') === 'Ada Lovelace' );
console.log( unirNombre('Grace', 'Hopper') === 'Grace Hopper' );

console.log( saludar('Ada') === '¡Hola Ada!' );
console.log( saludar('Grace') === '¡Hola Grace!' );

// deberias ver en la consola todo en true
*/


//-------------------------------------------------

//Ejercicio fn_014


//Crear una función llamada obtenerPrimerElemento
//La función recibe un único parámetro, del tipo array
//Retornar el elemento que se encuentra en la primer posición
// codear a aca abajo la solución al ejercicio
/*
function obtenerPrimerElemento(array){
    return array[0];
}
var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

console.log( obtenerPrimerElemento(peliculasBatman) ); // "Batman Begins"
console.log( obtenerPrimerElemento(numerosPares) ); // 0
*/


//-------------------------------------------------

//Ejercicio fn_015


//Crear una función llamada obtenerUltimoElemento
//La función recibe un único parámetro, del tipo array
//Retornar el elemento que se encuentra en la última posición
// codear a aca abajo la solución al ejercicio
/*

function obtenerUltimoElemento(array){
    return array[array.length - 1];
}
var peliculasBatman = ["Batman Begins", "The Dark Knight", "The Dark Knight Rises"];

var numerosPares = [0, 2, 4, 6, 8, 10, 12];

console.log( obtenerUltimoElemento(peliculasBatman) ); // "The Dark Knight Rises"
console.log( obtenerUltimoElemento(numerosPares) ); // 12
*/


//-------------------------------------------------

//Ejercicio fn_016


//Crear una función llamada calcularSumatoria
//La función recibe un único parámetro, del tipo array, con números enteros
//Retornar la suma de todos los números que pertenecen al array
// codear a aca abajo la solución al ejercicio

// CREAR calcularSumatoria
/*
var numeros = [7, 4, 1, 8, 9, 4, 9];

var sumados = numeros.reduce(function(total, numero){
    return total + numero;
})

console.log(sumados); // 42

*/


//-------------------------------------------------

//Ejercicio fn_017


//Si tenemos el array playlist
//Recorrer la lista de canciones con un ciclo y mostrarlas en consola una a una utilizando console.log()
//De inicio a fin
//De fin a inicio
/*
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

function ordenar(){
    playlist.sort()

    playlist.forEach(function(tema){
        console.log(tema)
    })
    
}

ordenar();

function ordenarfin(){
    playlist.reverse();
    playlist.forEach(function(tema){
        console.log(tema)
    })
}

ordenarfin();
*/


//-------------------------------------------------

//Ejercicio fn_018


//Tenemos un array en una variable masNumeros con números al azar.
//También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
//Recorré el array masNumeros y:
//Si el número es par, agregalo al array numerosPares
//Si el número es impar, agregalo al array numerosImpares
//Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]
//Para saber si un número es par o impar, tenemos que utilizar las funciones que creamos en el ejercicio fn_012
/*
var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

masNumeros.forEach(function(numero){
    if(numero%2 ==0){
        numerosPares.push(numero);
    }else if(numero%2!==0){
        numerosImpares.push(numero);
    }
})// codeá acá la solución al ejercicio

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
*/


//-------------------------------------------------

//Ejercicio fn_019


//Crear una función con el nombre compararNumeros que acepte dos parámetros numéricos llamados numero1 y numero2
//La función tiene que retornar:

//SI numero1 es menor que numero2, retornar -1
//SI numero2 es menor que numero1, retornar 1
//SI numero1 es igual que numero2, retornar 0
//Probar la función en el siguiente código
/*
function compararNumeros(numero1, numero2){
    if(numero1<numero2){
        return -1;
    }else if(numero1>numero2){
        return 1
    }else if(numero1===numero2){
        return 0
    }

}


console.log( compararNumeros(1, 5) < 0 ); // true
console.log( compararNumeros(5, 1) > 0 ); // true
console.log( compararNumeros(1, 1) === 0 ); // true
*/


//-------------------------------------------------

//Ejercicio fn_020


//Crear una función con el nombre mostrarElNumeroMasGrande que acepte dos parámetros numéricos llamados numero1 y numero2
//La función tiene que retornar el mensaje:
//SI numero1 es mayor que numero2, retornar El número ${numero1} es más grande que ${numero2}
//SI numero2 es menor que numero1, retornar El número ${numero2} es más grande que ${numero1}
//SI numero1 es igual que numero2, retornar Los dos números son iguales
//Para comparar los dos números, hay que usar la función compararNumeros desarrollada en el ejercicio fn_019

//Probar la función en el siguiente código
/*
function mostrarElNumeroMasGrande(numero1, numero2){
    if(numero1>numero2){
        return 'El número '+ numero1 + ' es más grande que ' + numero2
    }else if(numero2 > numero1){
        return 'El número '+ numero2 + ' es más grande que ' + numero1
    }else if(numero1===numero2){
        return 'Los dos números son iguales'
    }

}


console.log( mostrarElNumeroMasGrande(1, 5) ); // El número 5 es más grande que 1
console.log( mostrarElNumeroMasGrande(63, 27) ); // El número 63 es más grande que 27
console.log( mostrarElNumeroMasGrande(1, 1) ); // Los dos números son iguales
*/
