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

// 4. If Else
// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si elvalor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y 
// sino un alerta con el mensaje “Lower than 0,5”.
// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 ymuestre los siguientes mensajes de alerta:
// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.
num=Math.random();
if (num > 0,5){
    console.log("Greater than 0,5");
}
else{
    console.log("Lower than 0,5");
}

age= Math.floor(Math.random()*101);
if (age<2){
    console.log("Bebe");
}
else if (age>=2 && age < 12){
    console.log("Niño");
}
else if (age>=13 && age < 19){
    console.log("Adolescente");
}
else if (age>=20 && age < 30){
    console.log("Joven");
}
else if (age>=31 && age < 60){
    console.log("Adulto");
}
else if (age>=61 && age < 75){
    console.log("Adulto mayor");
}
else if (age>75){
    console.log("Anciano");
}

// 5. For
// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando unbucle for de JavaScript para mostrar una alerta utilizando cada una de laspalabras.
// b. Al array anterior convertir la primera letra de cada palabra en mayúscula ymostrar una alerta por cada palabra modificada.
// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al arraydel punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro dela variable
//  sentence. Al final mostrar una única alerta con la cadena completa.
//  d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array conel número de la repetición, es decir que al final de la ejecución del 
//  bucle fordebería haber 10 elementos dentro del array, desde el número 0 hasta al número9. Mostrar por la consola del navegador el array final (utilizar console.log)

array=["Hola","mundo", "como", "estas", "?"]

for (x in array){
    console.log(array[x]);
}
for (x in array){
    array[x]=array[x][0].toUpperCase()+array[x].substring(1,array[x].length);
    console.log(array[x]);
}
console.log(array);

array=[];
for (i=0; i<10; i++){
    array.push(i);
}
console.log(array);