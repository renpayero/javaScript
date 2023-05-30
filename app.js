// 1. Variables y Operadoresa. 
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable.
// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizarlength).
//a
var num1=3, num2=5;
num3=num1+num2;
console.log(num3);

var string1="Hola",string2=" mundo!";
string3= string1+string2;
console.log(string3);

var string1="Hola",string2=" mundo!";
longitud=string1.length+string2.length;
console.log(longitud);

// 2. Strings
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los primeros 5 caracteres guardando el resultado en una nuevavariable (utilizar substring).
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevostring con la primera letra en mayúscula y las demás en minúscula. 
//     Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +).
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y 
// las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +).
var string1="Hola mundo!";
uppercase= string1.toUpperCase();
console.log(string1)

var string2=string1.substring(0,5);
console.log(string2); //se guardan los primeros 5 caracteres incluido el espacio entre hola y mundo

cadenamenos3=string1.length-3;
ultimos3= string1.substring(cadenamenos3,string1.length);
console.log(ultimos3)

var string1="hola muNDo!";
primeramayus=string1[0].toUpperCase()+string1.substring(1,string1.length).toLowerCase();
console.log(primeramayus);

var string1="hola muNDo!";
espacioblanco=string1.indexOf(" ");
console.log(espacioblanco);

var string1="hola muNDo!";
string1=string1[0].toUpperCase()+string1.substring(1,string1.indexOf(" ")) +  " " + string1[string1.indexOf(" ")+1].toUpperCase() +string1.substring(string1.indexOf(" ")+2, string1.length).toLowerCase()
console.log(string1);

// 3. Arrays
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar 
// porconsola los meses 5 y 11 (utilizar console.log).
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
// e. Invertir el orden del array (utilizar reverse).
// f. Unir todos los elementos del array en un único string donde cada mes esteseparado por un guión - (utilizar join).
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice)

var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Los meses 5 y 11 son:", array[4], "y", array[10])

array=array.sort();
console.log(array);

array.push("Nociembre");
array.unshift("Fenero");
console.log(array);

array.shift();
array.pop();
console.log(array);

array.reverse();
console.log(array);

stringarray= array.join("-");
console.log(stringarray);

var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array=array.slice(4,11); //podemos simplemente utilizar los valores numericos en vez de tener que recorrer el array para encontrar los meses
                        //ya que si tenemos un array con los meses ordenados podemos tomar como precondicion que los meses van a estar en su indice correspondiente
console.log(array);
