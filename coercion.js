//COERCION IMPLICITA: Es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor

var a = 4 + "7"
undefined
typeof a
"string"
var b = 4 * '7';
undefined
typeof b
"number"

//COERCION EXPLICITA : Cuando oligamos a u valor a reconvertirse.

var a = 20;    
undefined

var b = a + '';
undefined

console.log(b);
20
undefined

typeof b;
"string"

var c = String(a);
undefined

typeof c
"string"

console.log(c);
 20
undefined

var d = Number(c);
undefined

typeof d
"number"

console.log(d);
20
