//LAS FUNCIONES NECESITAN PARAMETROS (HOLA)

//FUNCIONES DECLARATIVAS : Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

// Funciones Declarativas:
// En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function miFuncion() {
    return 3;
}

miFuncion();

//FUNCIONES DE EXPRESION O ANONIMAS
//Expresión de función:
// En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima. (`Hola ${nombre}`)
//Las funciones necesitan PARAMETROS

var miFuncion = function(a,b) {
    return a + b;
}


miFuncion();


//EJEMPLO

function saludarEstudiantes(estudiante){
     console.log(estudiante);
}

saludarEstudiantes('Diego');

//Diego


function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes ('DIEGO')

//Hola DIEGO

////////////////

function sumar (a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(1,2);

//3

function sumar(a,b) {
    return a + b;
}

sumar(1,2);

//3

// DIFERENCIAS

// Diferencias:
// A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
