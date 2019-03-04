console.log('Hola Mundo')

//--------------------------------------

//Ejercicio arr_000


//Declaraur una variable llamada womenInTech y asignarle un array que contenga 5 nombres de mujeres influyentes en la tecnología.
//Declarar una variable llamada arrayDeNumeros y asignarle un array que contenga 5 números (cualquier número).
//Mostrar en consola el contenido de ambas variables.

/* 
var womenInTech = ['Nombre 1', 'Nombre 2', 'Nombre 3', 'Nombre 4', 'Nombre 5'];
var arrayDeNumeros = [3,5,7,4,0];

for (i=0; i<womenInTech.length; i++){

    console.log(womenInTech[i], arrayDeNumeros[i]);
}

*/

//--------------------------------------

//Ejercicio arr_001


//Dado el array playlistFoo, mostrar en consola la canción que está en segundo y quinto lugar.
/*
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly', 'Best of You', 'All My Life', 'Monkey Wrench', 'The Sky is a Neighborhood'];

console.log(playlistFoo[1]);
console.log(playlistFoo[4]);*/


//--------------------------------------

//Ejercicio arr_002


//Crear un array con el nombre notas y asignar un array con 10 valores numéricos de 1 a 10
//Sumar los valores de la primera, cuarta, quinta y última entrega
//Cada nota del array notas corresponde a una entrega de las alumnas
/*
var notas = [0,1,2,3,4,5,6,8,9,10];

var suma = notas[0] + notas[3] + notas[4] + notas[9];

console.log(notas[0], notas[3], notas[4] , notas[9])

console.log(suma);*/


//--------------------------------------

//Ejercicio arr_003


//Crear un array con el nombre notas y asignar un array con 10 valores numéricos de 1 a 10
//Sumar los valores de la primera, cuarta, quinta y última entrega
//Cada nota del array notas corresponde a una entrega de las alumnas
/*
var notas = [1,2,3,4,5,6,7,8,9,10];

var sumaNotas = notas[0] + notas[3] + notas[4] + notas[notas.length-1];

console.log(sumaNotas);
*/


//--------------------------------------

//Ejercicio arr_004


//Crear el siguiente array con el nombre datos: [27, true, 'La edad de la persona es: ']
//Si el segundo item en el array datos es verdadero entonces
//Mostrar en consola: La edad de la persona es: 27
//Utilizar el primer y último item del array datos para formar el string del mensaje pedido
/*
var datos = [27, true, 'La edad de la persona es: '];

if(datos[1]===true){
  console.log(datos[2]+datos[0]);
}
*/


//--------------------------------------

//Ejercicio arr_005


//Crear un documento con el nombre arr_005.js
//Declarar un array vacio con el nombre alumnas
//Asignar el nombre de una alumna en los ínidices: 0, 1, 2, 3, 4 y 5
//Mostrar en consola cada uno de los elementos utilizando los índices dados
/*
var alumnas = [];

alumnas.push('Ada');

alumnas.push('Grace');

alumnas.push('Radia');

alumnas.push('Janie');

alumnas.push('Sheryl');

alumnas.push('Hedy');

console.log(alumnas);

for(i=0; i<alumnas.length; i++){

    console.log('Indice', i + ':', alumnas[i]);
}

*/

//--------------------------------------

//Ejercicio arr_006


//Declarar un array con el nombre discoNevermind y asignar los siguientes valores:
//Reemplazar Immodium por Breed
//Reemplazar Pay To Play por Stay Away
//Reemplazar Tim por Something in the Way
//Mostrar en consola la lista de canciones modificada
//El resultado debería ser: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are", "Breed", "Lithium", "Polly", "Territorial Pissings", "Drain You", "Lounge Act", "Stay Away", "On a Plain", "Something in the Way"]

/*
var nevermind = ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are', 'Immodium', 'Lithium', 'Polly', 'Territorial Pissings', 'Drain You', 'Lounge Act', 'Pay To Play', 'On a Plain', 'Endless, Nameless'];

nevermind[3] = 'Breed';
console.log(nevermind);

nevermind[9]= 'Stay Away';
console.log(nevermind);

nevermind[nevermind.length-1] = 'Somthing in the way';
console.log(nevermind);
*/

//--------------------------------------

//Ejercicio arr_007


//Crear un array con el nombre peliculas y asignar los siguientes elementos
//Declarar un nuevo array peliculasBatman y asginar sólo las peliculas que deberían estar en la lista de peliculasBatman
//Mostrar en consola las dos listas con todas las peliculas y las que tiene solo las de Batman
/*
var peliculas = ['Superman', 'Batman Begins', 'The Dark Knight', 'Man of Steel', 'The Dark Knight Rises', 'The Batman'];

var peliculasBatman =[peliculas[1], peliculas[2], peliculas[4], peliculas[5]];

console.log(peliculas);
console.log(peliculasBatman);*/


//--------------------------------------

//Ejercicio arr_008


//Teniendo el array ganadorasRupaul, mostrar en consola el nombre de la primer y última ganadora.
//Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no supieramos la cantidad exacta de elementos


/*
var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(ganadorasRupaul[0]);
console.log(ganadorasRupaul[ganadorasRupaul.length-1]);
*/


//--------------------------------------


//Ejercicio arr_009


//Teniendo el array ganadorasRupaul, mostrar en consola el nombre de la primer y última ganadora.
//Para la última ganadora no se puede usar un índice a mano sino que hay que hacerlo de forma dinámica como si no supieramos la cantidad exacta de elementos
/*
var ganadorasRupaul = ['BeBe Zahara Benet', 'Tyra Sanchez', 'Raja', 'Sharon Needles', 'Jinkx Monsoon', 'Bianca del Rio', 'Violet Chachki', 'Bob the Drag Queen', 'Sasha Velour', 'Aquaria'];

console.log(ganadorasRupaul[0]);
console.log(ganadorasRupaul[ganadorasRupaul.length-1])
*/


//--------------------------------------


//Ejercicio arr_010


//Teniendo dos arrays de canciones, comparar sus longitudes y mostrar en pantalla “La playlist de Nirvana tiene más canciones” si el array playlistNirvana tiene más canciones, o “La playlist de Foo Fighters tiene más canciones” si el array playlistFoo tiene más elementos.
/*
var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly'];

if(playlistNirvana.length>playlistFoo.length){
  console.log('La playlist de Nirvana tiene más canciones')
}else{
  console.log('La playlist de Foo Fighters tiene más canciones')
}
*/


//--------------------------------------


//Ejercicio arr_011


//Eliminá el primer elemento del array y colocá en su lugar tu fruta o verdura preferida utilizando shift y unshift.
/* 
var frutas = ['Manzana', 'Banana'];

frutas.shift();
frutas.unshift('frutilla');

console.log(frutas);

*/


//--------------------------------------

//Ejercicio arr_012


//Declarar una variable llamada concreteAndGold y asignarle un array vacio []
//Agregar al array las siguientes canciones:

//No se puede utilizar índices numéricos
//Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
//Los elementos tienen que guardarse en el mismo orden que se van ingresando
//Mostrar en consola la primera y última canción
//Mostrar en consola el contenido del array
/*
var concreteAndGold = [];

concreteAndGold.push('T-Shirt');
concreteAndGold.push('Run');
concreteAndGold.push('Make It Right');
concreteAndGold.push('The Sky Is a Neighborhood');
concreteAndGold.push('La Dee Da');
concreteAndGold.push('Dirty Water');
concreteAndGold.push('Arrows');
concreteAndGold.push('Happy Ever After (Zero Hour)');
concreteAndGold.push('Sunday Rain');
concreteAndGold.push('The Line');
concreteAndGold.push('Concrete and Gold');

console.log(concreteAndGold[0]);
console.log(concreteAndGold[concreteAndGold.length-1]);
console.log(concreteAndGold);

*/


//--------------------------------------

//Ejercicio arr_013


//Declarar una variable llamada concreteAndGold y asignarle un array vacio []
//Agregar al array las siguientes canciones:
//No se puede utilizar índices numéricos
//Utilizar alguna de las siguientes funciones: shift, unshift, push, pop
//Los elementos tienen que guardarse en el orden inverso al que se van ingresando
//Mostrar en consola la primera y última canción
//Mostrar en consola el contenido del array
/*
var concreteAndGold = [];

concreteAndGold.unshift('T-Shirt');
concreteAndGold.unshift('Run');
concreteAndGold.unshift('Make It Right');
concreteAndGold.unshift('The Sky Is a Neighborhood');
concreteAndGold.unshift('La Dee Da');
concreteAndGold.unshift('Dirty Water');
concreteAndGold.unshift('Arrows');
concreteAndGold.unshift('Happy Ever After (Zero Hour)');
concreteAndGold.unshift('Sunday Rain');
concreteAndGold.unshift('The Line');
concreteAndGold.unshift('Concrete and Gold');

console.log(concreteAndGold[0]);
console.log(concreteAndGold[concreteAndGold.length-1]);
console.log(concreteAndGold);
*/


//--------------------------------------

//Ejercicio arr_014


//Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
//Eliminar el primer elemento, y agregarlo al final del array.
//Mostrar el resultado final.
/*

var numeros = [6, 1, 2, 3, 4, 5];

numeros.push(numeros.shift());

console.log(numeros);
*/


//--------------------------------------

//Ejercicio arr_015


//Partiendo del siguiente array de números var numeros = [6, 2, 3, 4, 5, 1];
//Eliminar el primer elemento, y guardarlo en una variable primerElemento.
//Eliminar el último elemento, y guardarlo en una variable ultimoElemento.
//Agregar el valor de primerElemento al final del array.
//Agregar el valor de ultimoElemento al principio del array.
//Mostrar el resultado final.
/*
var numeros = [6, 2, 3, 4, 5, 1];

var primerElemento = numeros.shift();
var ultimoElemento = numeros.pop();

numeros.push(primerElemento);
numeros.unshift(ultimoElemento);

console.log(numeros);
*/


//--------------------------------------


//Ejercicio arr_016


//Teniendo las siguientes variables playlist y playlistEscuchada:
//Eliminar la primer canción del array playlist, y agregar el elemento eliminado al final del array playlistEscuchada
//Mostrar el contenido de playlist
//Mostrar el contenido de playlistEscuchada
/*
var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistEscuchada = ['School'];

playlistEscuchada.push(playlist.shift());

console.log(playlist);
console.log(playlistEscuchada);
*/


//--------------------------------------


//Ejercicio arr_017


//Recorrer la lista de canciones con un ciclo y mostrarlas en consola una a una utilizando console.log()
//De inicio a fin
//De fin a inicio
/*
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

for(i=0; i<playlist.length; i++){
    console.log(playlist[i]);
}

for(i=playlist.length-1; i>=0; i--){
    console.log(playlist[i]);
}

*/


//--------------------------------------


//Ejercicio arr_018


//Si tenemos el array womenInTech
//Ordenar el array
//Mostrar en la consola el array ordenado
//Revertir el orden de la lista ordenada
//Mostrar en la consola el array revertido
//Unir los nombres de todas las mujeres en tecnología utilizando " - " para separarlos.
/*
var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];

console.log(womenInTech.sort());
console.log(womenInTech.reverse());
console.log(womenInTech.join(' - '));
*/


//--------------------------------------


//Ejercicio arr_019


//Si tenemos dos arrays playlistNirvana y playlistFoo:
//Crear una variable playlistCompleta, con los nombres de todas las canciones que hay en playlistNirvana y playlistFoo.
//Mostrar en consola los siguiente nombres de forma individual (uno por linea):
//Nombres de las canciones de nirvana (a mano utilizando índices)
//Nombres de los canciones de foo fighters (utilizando while)
//Nombres de todas las canciones entre ambas listas (utilizando for)
/*
var playlistNirvana = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var playlistFoo = ['Everlong', 'The Pretender', 'Learn to Fly']

var playlistCompleta =[];

for(var i=0;i<playlistNirvana.length;i++){
  playlistCompleta.push(playlistNirvana[i]); 
}

for(var i=0;i<playlistFoo.length;i++){
  playlistCompleta.push(playlistFoo[i]);
}

console.log(playlistNirvana[0]);
console.log(playlistNirvana[1]);
console.log(playlistNirvana[2]);
console.log(playlistNirvana[3]);

var i=0;
while(i<playlistFoo.length){
  console.log(playlistFoo[i]);
  i++
}

for(var i=0; i<playlistCompleta.length;i++){
  console.log(playlistCompleta[i])
}
*/


//--------------------------------------


//Ejercicio arr_020


//Tenemos un array de canciones de Spotify. Queremos mostrar por consola la siguiente información:
//Posición de la canción Lithium
//Posición de la canción On a Plain
//Completar el siguiente código para que pueda mostrarnos lo que solicitamos
/*
var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
var indiceLithium = playlist.indexOf('Lithium') ;
var indiceOnAPlain = playlist.indexOf('On a Plain') ;

console.log("El índice de la canción Lithium es:");
console.log(indiceLithium); // deberia mostrar 3
console.log("El índice de la canción On a Plain es:");
console.log(indiceOnAPlain); // deberia mostrar -1
*/

//--------------------------------------

//Ejercicio arr_021


//Tenemos un array con todas las ganadoras de RuPaul’s Drag Race, en la variable ganadorasRupaul. Vamos a escribir un programa en el que queremos saber la siguiente información:
//Que número de ganadora es Sharon Needles
//Mostrar por pantalla si Latrice Royale fue una ganadora del concurso.
//Completar el siguiente código para que pueda mostrarnos lo que solicitamos
/*
var ganadorasRupaul = ["Tyra Sanchez", "Chad Michaels", "Raja", "Trixie Mattel", "Aquaria", "Bebe Zahara Benet", "Sharon Needles", "Jinkx Monsoon", "Alaska Thunderfuck 5000", "Bianca Del Rio", "Violet Chachki", "Bob the Drag Queen", "Sasha Velour"];

var posicionSharonNeedles = ganadorasRupaul.indexOf('Sharon Needles');

var latriceRoyaleGano = ganadorasRupaul.indexOf('Latrice Royale');

console.log("Sharon Needles es la ganadora número:");
console.log(posicionSharonNeedles);

if (latriceRoyaleGano !== -1) {
  console.log("Latrice Royale fue ganadora de RuPaul's Drag Race");
} else {
  console.log("Latrice Royale NO fue ganadora de RuPaul's Drag Race");
}
*/


//--------------------------------------


//Ejercicio arr_022


//Tenemos un array llamado womenInTech sobre el que tenés que realizar las siguientes operaciones:

//eliminar a "Bill Gates", que está en la última posición
//agregar "Parisa Tabriz" al final del array
//Luego de realizar las dos operaciones, vamos a mostrar la siguiente información por consola:

//la longitud del array
//quien está en la posición 3
//mostrar todos los elementos del array, uno debajo del otro
/*
var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Bill Gates"];

womenInTech.pop();
womenInTech.push('Parisa Tabriz');

var longitud = womenInTech.length;
var enLaPosicion3 = womenInTech[2];

console.log("La longitud del array es:");
console.log(longitud);
console.log("En la posición 3 está:");
console.log(enLaPosicion3);

for(i=0; i<womenInTech.length; i++){
    console.log(womenInTech[i]);
}
*/


//--------------------------------------


//Ejercicio arr_023


//Tenemos un array llamado womenInTech con nombres de mujeres influyentes en la tecnología.
//Queremos transformar el array en un string sin usar join, separando los nombres con un guión y guardando el string resultante en la variable nombresSeparadosPorGuion
/*
var womenInTech = ["Ada Lovelace", "Hedy Lamarr", "Grace Hopper", "Radia Perlman", "Janie Tsao", "Sheryl Sandberg", "Susan Kare", "Parisa Tabriz"];
var nombresSeparadosPorGuion = [];

for(i=0;i<womenInTech.length;i++){
    nombresSeparadosPorGuion.push(womenInTech[i]);
    nombresSeparadosPorGuion.push(' - ');
}

nombresSeparadosPorGuion.pop();

console.log(nombresSeparadosPorGuion);
*/


//--------------------------------------


//Ejercicio arr_024


//Tenemos un array llamado numbers con números enteros al azar.
//Queremos calcular la suma de todos los números que están en el array.
//Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
/*
var numbers = [6, 1, 34, 94, 3, 17];
var sum = 0;

for(i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);*/


//--------------------------------------


//Ejercicio arr_025


//Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
//Queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
//Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
/*
var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = 0;

for (i=0; i<notasDeTPs.length; i++){
    notaFinal = notaFinal + notasDeTPs[i];
}

notaFinal = notaFinal / notasDeTPs.length;

console.log(notaFinal);
// deberia mostrar 6.8
*/


//--------------------------------------


//Ejercicio arr_026


//Tenemos un array en una variable masNumeros con números al azar.
//También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
//Recorré el array masNumeros y:
//Si el número es par, agregalo al array numerosPares
//Si el número es impar, agregalo al array numerosImpares
//Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]

/*
var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

for(i=0; i<masNumeros.length; i++){
    if(masNumeros[i]%2==0){
        numerosPares.push(masNumeros[i]);
    }else if(masNumeros[i]%2!==0){
        numerosImpares.push(masNumeros[i]);
    }
}

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
*/


//--------------------------------------


//Ejercicio arr_027


//Crear un documento con el nombre arr_027.js
//Tenemos un array en una variable playlist con una lista de canciones de un disco.
//Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()
/*
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(function(cancion){
    console.log(cancion);
})
*/



//--------------------------------------

//Ejercicio arr_028


//Tenemos un array en una variable librosDeJS con una lista de libros de javascript.
//Queremos saber la cantidad de libros que tenemos en el array
//Nos pidieron que evitemos usar la propiedad length para contar los elementos de un array y que tenemos que usar si o si un forEach
//Completá el siguiente código para que funcione el último console.log() y muestre el mensaje Mi lista de libros de JavaScript tiene 9 libros
/*
var librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

var totalLibros = 0;

librosDeJS.forEach(function(){
    totalLibros ++;
})


console.log('Mi lista de libros de JavaScript tiene ' + totalLibros + ' libros');

*/


//--------------------------------------


//Ejercicio arr_029


//Tenemos un array en una variable playlist con una lista de canciones de un disco.
//Recorrer la lista con la función forEach y mostrar la posición y el nombre de la canción utilizando un console.log()
/*
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

playlist.forEach(function(cancion, indice){
    console.log(indice + ' - ' + cancion);
});

*/


//--------------------------------------


//Ejercicio arr_030


//Tenemos un array llamado numbers con números enteros al azar.
//Queremos calcular la suma de todos los números que están en el array.
//Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
//Es necesario utilizar forEach para conseguir la suma
/*
var numbers = [6, 1, 34, 94, 3, 17];
var sum = 0;

numbers.forEach(function(numero){
    sum = sum + numero;
})

console.log(sum);

*/


//--------------------------------------


//Ejercicio arr_031


//Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
//Queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
//Es obligatorio utilizar forEach para conseguir el promedio
/*

var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = 0;

notasDeTPs.forEach(function(nota){
    notaFinal= notaFinal + nota;
})

notaFinal = notaFinal / notasDeTPs.length;


console.log(notaFinal);

*/


//--------------------------------------


//Ejercicio arr_032


//Tenemos un array en una variable masNumeros con números al azar.
//También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
//Recorré el array masNumeros (utilizando forEach) y:
//Si el número es par, agregalo al array numerosPares
//Si el número es impar, agregalo al array numerosImpares
//Por ejemplo: Si tenemos [7, 8, 9, 10], numerosPares quedaría [8, 10] y numerosImpares quedaría [7, 9]

/*
var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];
var numerosPares = [];
var numerosImpares = [];

masNumeros.forEach(function(numero){
    if(numero%2==0){
        numerosPares.push(numero);
    }else if(numero%2 !==0){
        numerosImpares.push(numero);
    }
})

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
*/


//--------------------------------------


//Ejercicio arr_033


//Tenemos un array en una variable valores con números al azar.
//También tenemos un array vacio en la variable dobles.
//Recorré el array valores (utilizando forEach) y guardá, en el mismo orden, cada número pero multiplicándolo por 2.
//Por ejemplo: Si tenemos [1, 4, 7], dobles quedaría [2, 8, 14]
/*
var valores = [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ];
var dobles = [];

valores.forEach(function(numero){
    dobles.push(numero*2);
})


console.log("valores: ", valores);
console.log("dobles: ", dobles);
*/


//--------------------------------------


//Ejercicio arr_034


//Tenemos un array en una variable numeros con números al azar.
//Usá la función map para crear un nuevo array incrementando cada valor del array en 10, y guardarlo en la variable numerosMasDiez
//Mostrar por consola el array original y el nuevo
/*

var numeros = [1, 2, 3, 4, 5];
var numerosMasDiez;

var numerosMasDiez = numeros.map(function(numero) {
    return numero +10;
  });


console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]
*/


//--------------------------------------


//Ejercicio arr_035


//Tenemos un array en una variable numeros con números al azar.
//Usar la función map para crear un nuevo array multiplicando cada valor del array por 2, y guardarlo en la variable dobles
//Mostrar por consola el array original y el nuevo
/*
var numeros = [3, 7, 13, 99];

var dobles = numeros.map(function(numero){
    return numero * 2;
});

console.log(numeros); // [3, 7, 13, 99]
console.log(dobles); // [6, 14, 26, 198]
*/


//--------------------------------------


//Ejercicio arr_036


//Tenemos un array en una variable frases con frases al azar.
//Usar la función map para crear un nuevo array donde cada frase empiece y termine con signo de exclamación.
//Mostrar por consola el array original y el nuevo
/*
var frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

var frasesExclamadas = frases.map(function(frase){
    return frase + '!';
})

console.log(frases);
console.log(frasesExclamadas);

*/

//--------------------------------------


//Ejercicio arr_037


//Tenemos un array en una variable libros con libros para leer sobre Javascript.
//Usar la función map para crear un nuevo array donde cada titulo de los libros esté encerrado en una etiqueta <li></li>.
//Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>
/*
var librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

var libros = librosDeJS.map(function(libro){
    return '<li>' + libro + '</li>';
})

console.log('<ul>' + libros + '</ul>')

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent Ja

*/

//--------------------------------------

/*
//Ejercicio arr_038


//Tenemos un array en una variable frases con frases al azar.
//Usar la función map para crear un nuevo array que contenga la longitud de cada palabra.
//Mostrar por consola el array original y el nuevo.

var frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

var longitudes = frases.map(function(frase){
    return frase.length();
});

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]

*/


//--------------------------------------


//Ejercicio arr_039


//Tenemos un array en una variable playlist con una lista de canciones de un disco.
//Usar la función map para agregar a cada título de la canción el número de posición en la que está dentro del array.
/*
var playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

var numero = playlist.map(function(cancion, indice){
    return indice + ' - ' + cancion;
});

console.log(numero);
*/


//--------------------------------------


//Ejercicio arr_040


//Tenemos un array en una variable costos con números que representan costos de diferentes productos.
//Completar el siguiente código para llegar al resultado esperado
//A un costo primero se le agrega la ganancia y después el IVA

/*
var costos = [ 12.5, 56, 98, 45.75 ];

var sumarGanancia = function (costo) {
  return costo * 1.5;
}

var preciosConIVA = costos.map(function (costo) {
    return costo * 1.21;
  });

var preciosFinales = preciosConIVA.map(function (costo) {
    return costo * 1.5;
  })  


console.log(preciosFinales);
*/


//--------------------------------------


//Ejercicio arr_041


//Tenemos un array en una variable costos con números que representan costos de diferentes productos.
//También tenemos un array en una variable productos con los nombres de cada producto.
//Completar el siguiente código para llegar al resultado esperado
//A un costo primero se le agrega la ganancia y después el IVA
//El nombre de un producto en una posición, se corresponde con el precio que está en la misma posición. 
//Por ejemplo: el producto que está en la posición 1 tiene un costo igual al elemento en la posición 1 del array costos
/*
var productos = [ 'celular', 'notebook', 'monitor' ];
var costos = [ 12.5, 56, 98 ];


var sumarGanancia = costos.map(function (costo) {
  return costo * 1.5;
})

var agregarIVA = sumarGanancia.map(function (costo) {
  return costo * 1.21;
})

var preciosFinales = agregarIVA.map(function(precio, indice){

  return  productos [indice] + ': ' +  precio
})

console.log(preciosFinales);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

*/


//--------------------------------------


//Ejercicio arr_042


//Tenemos un array en una variable costos con números que representan costos de diferentes productos.
//Usando filter, crear un nuevo array con los precios más caros (mayores a 50) y guardarlo en la variable losMasCaros
//Mostrar el array original y el filtrado
/*
var costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];

var losMasCaros = costos.filter(function(costo) {
  return costo > 50;
});

console.log(costos);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]
*/


//--------------------------------------


//Ejercicio arr_043


//Tenemos un array en una variable frases con frases al azar.
//Usando filter, crear un nuevo array con las frases que tengan menos de 20 caracteres y guardarlo en la variable frasesCortas
//Mostrar el array resultante
/*
var frases = [ 'Ut vero.', 'Gubergren labore clita et duo accusam diam dolor. Ipsum nonumy et labore kasd lorem takimata ea sed dolor. Kasd no.',
  'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Est diam justo gubergren dolores et vero.',
  'Et sanctus sanctus et dolor clita.', 'Dolores.', 'Diam sea takimata voluptua ipsum labore voluptua kasd. At consetetur dolore diam.'];


var frasesCortas = frases.filter(function(frase){
  return frase.length < 20;
})

console.log(frasesCortas);
*/


//--------------------------------------


//Ejercicio arr_044


//Tenemos un array en una variable numeros con números al azar.
//También tenemos dos arrays vacios en las dos variables numerosPares y numerosImpares.
//Utilizando filter crear un nuevo array con todos los números pares y guardalo en la variable numerosPares
//Utilizando filter crear un nuevo array con todos los números impares y guardalo en la variable numerosImpares
/*
var masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

var numerosPares = masNumeros.filter(function(numero){
  return numero%2==0
})
var numerosImpares = masNumeros.filter(function(numero){
  return numero%2!==0
})
console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]
*/


//--------------------------------------


//Ejercicio arr_045


//Tenemos un array en una variable mix con varios elementos, de distintos tipos de datos.
//Usando filter, crear un nuevo array con todos los elementos que sean strings y guardalo en la variable soloStrings.
//Ayuda: para saber si algo es un string en javascript, podés usar typeof ver más
//Mostrar el array resultante
/*
var mix = ['Ut vero.', 2, function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false, 'Kasd stet.', 'Sit et dolor.',
  null, null, [ 1, 2, 3], 'Dolore.'];

  var soloStrings = mix.filter(function(item){
    return typeof item ==='string';
  })

console.log(soloStrings);
// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
*/


//--------------------------------------


//Ejercicio arr_046


//Tenemos un array playlist con canciones seleccionadas al azar por spotify para reproducir.
//Tenemos otro array playlistEscuchada que tiene canciones que ya escuchamos anteriormente.
//Usando filter, queremos crear una nueva lista que solo contenga aquellas canciones guardadas en playlist que no están en playlistEscuchada
//Guarda el resultado en la variable playlistSinEscuchar
/*
var playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
var playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']


var playlistSinEscuchar = playlist.filter(function(tema){

    playlistEscuchada.forEach(function(temaEscuchado){
      if(tema !== temaEscuchado){
        return tema
      }
    })
})

console.log(playlistSinEscuchar);

// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]
*/


//--------------------------------------


//Ejercicio arr_047


//Tenemos un array llamado numbers con números enteros al azar.
//Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
//Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
/*
var numbers = [6, 1, 34, 94, 3, 17];
var sum = numbers.reduce(function(total,numero){
  return total + numero;
});

console.log(sum);
*/


//--------------------------------------


//Ejercicio arr_048


//Tenemos un array llamado numbers con números enteros al azar.
//Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
//Por ejemplo: Si tenemos [1, 2, 3, 4], la suma de todos los números es 24
//Ayuda: ojo con el valor de comienzo
/*
var numbers = [6, 1, 34, 94, 3, 17];
var mul = 0;

var mul = numbers.reduce(function(total,numero){
  return total*numero;
})

console.log(mul);
*/


//--------------------------------------


//Ejercicio arr_049


//Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
//Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas).
//Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
/*
var notasDeTPs = [4, 7, 8, 5, 10];
var notaFinal = 0;

notaFinal = (notasDeTPs.reduce(function(total,nota){
  return total + nota
})
) /notasDeTPs.length;
// codea debajo de este comentario la solucion al ejercicio

console.log(notaFinal);
// deberia mostrar 6.8
*/


//--------------------------------------


//Ejercicio arr_050


//Tenemos un array en una variable libros con libros para leer sobre Javascript.
//Usar la función reduce para crear un string con todos los titulos de los libros encerrados en una etiqueta <li></li>.
//Mostrar por consola el array nuevo, encerrándolo entre <ul></ul>
/*
var librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];
var array ='';
array = librosDeJS.reduce(function(acomulador,libro){

  return  <li+ libro + 

})
 console.log(array);

 */
// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>


//--------------------------------------


//Ejercicio arr_051


//Tenemos un array llamado numeros con números enteros al azar.
//Utilizando reduce, queremos crear un nuevo array con todos los números, pero eliminando aquellos que estén repetidos.
//Por ejemplo: Si tenemos [1, 4, 3, 2, 4], el nuevo array sería [1, 4, 3, 2]
/*
var numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

// codea debajo de este comentario la solucion al ejercicio
var sinRepetidos = ;

console.log(sinRepetidos);
// deberia mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

*/


//--------------------------------------


//Ejercicio arr_054


//Tenemos un array en una variable costos con números que representan costos de diferentes productos.
//Completar el siguiente código para obtener el precio final de cada producto y después calcular la suma total.
//A un costo primero se le agrega la ganancia y después el IVA
//Usar map y reduce
/*
var costos = [ 12.5, 56, 98 ];

var agregarIVA = costos.map(function (costo) {
  return costo * 1.21;
})

var sumarGanancia = agregarIVA.map(function (costo) {
  return costo * 1.5;
})

var precioTotal = sumarGanancia.reduce(function(total,suma){
  return total + suma
})

console.log(precioTotal); // 302.1975
*/


//--------------------------------------


//Ejercicio arr_055


//Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
//Queremos eliminar todos los números negativos
//Con los números restantes, obtener el doble de cada uno
//Finalmente, obtener la suma de todos los números
/*
var datos = [2, -4, 6, 0, 5, -1];

var positivos = datos.map(function(numero){
  if(numero>=0){
    return numero
  }else if(numero<0){
    return numero*2
  }
});


var total = positivos.reduce(function(total,numero){
  return total + numero
}) ;

console.log(total); // 26 (a mi me da 3)
*/


//--------------------------------------


//Ejercicio arr_056


//Tenemos un array, que tiene como elementos otros arrays
//A partir de ese array, queremos "aplanarlo" para conseguir un único array con todos los elementos
//Por ejemplo: [ [1, 2], [3, 4], [5, 6] ] aplanado (flatten) sería igual a [ 1, 2, 3, 4, 5, 6 ]
/*
var arrays = [
  [1, 2, 3],
  [4],
  [5, 6],
  [],
  [7]
];

var flattenArray = arrays.flat();

console.log(flattenArray); // [ 1, 2, 3, 4, 5, 6, 7 ]
*/