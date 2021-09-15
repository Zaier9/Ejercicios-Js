//METODO FILTER

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre:"Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

articulosFiltrados
(2) [{…}, {…}]
0: {nombre: "Libro", costo: 320}
1: {nombre: "Teclado", costo: 500}
length: 2
__proto__: Array(0)

//METODO MAP
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre:"Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos
(7) ["Bici", "Television", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]


//METODO FIND
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre:"Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];

var encuentraArticulo =  articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo
{nombre: "Laptop", costo: 20000}

//METODO forEach
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre:"Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];
undefined
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
 Bici
 Television
 Libro
 Celular
 Laptop
 Teclado
 Audifonos


 //METODO SOME
 var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre:"Television", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];


var articulosBaratos = articulos.some(function(articulo){
return articulo.costo <= 700;
});

articulosBaratos
true

//ADEMAS ESTAN EL PUSH() Y SHIFT()