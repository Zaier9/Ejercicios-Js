var frutas = ['manzana', 'banana', 'pera', 'frutilla'];

console.log(frutas)

console.log(frutas.length)
 4

console.log(frutas[2]);
pera

console.log(frutas[3]);
frutilla

console.log(frutas[0]);
manzana

var frutas = ['manzana', 'banana', 'pera', 'frutilla'];
var agregarUltimo = frutas.push('Uvas');
frutas
(5) ["manzana", "banana", "pera", "frutilla", "Uvas"]


var borrarUltimo = frutas.pop('Uvas');
frutas
(4) ["manzana", "banana", "pera", "frutilla"]

var borrarUltimo = frutas.pop('manzana');
frutas
(3) ["manzana", "banana", "pera"]

var borrarUltimo = frutas.pop();
frutas
(2) ["manzana", "banana"]

var agregarInicio = frutas.unshift('pera', 'mango', 'uva');
frutas
(5) ["pera", "mango", "uva", "manzana", "banana"]


var eliminarInicio = frutas.shift();
frutas
(4) ["mango", "uva", "manzana", "banana"]

var posicion = frutas.indexOf('manzana');
frutas
(4) ["mango", "uva", "manzana", "banana"]0: "mango"1: "uva"2: 
"manzana"3: "banana"length: 4__proto__: Array(0)

 posicion
2
