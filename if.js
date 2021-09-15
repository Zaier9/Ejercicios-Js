// if (true) {
//     console.log ('hola');
// } else {
//     console.log('Soy falso!')
// }


// if (true){
//     console.log('Hola');
// } else if () {
//     console.log('Soy falso!');
// } else {

// }

var edad = 18;
if(edad === 18) {
    console.log('Hey, puedes votar por primera vez!');
} else if (edad > 18) {
    console.log('Puedes votar de nuevo');    
} else {
    console.log('Aun no puedes votar');
}
Hey, puedes votar por primera vez!


var edad = 17;
if(edad === 18) {
    console.log('Hey, puedes votar por primera vez!');
} else if (edad > 18) {
    console.log('Puedes votar de nuevo');    
} else {
    console.log('Aun no puedes votar');
}
Aun no puedes votar


var edad = 21;
if(edad === 18) {
    console.log('Hey, puedes votar por primera vez!');
} else if (edad > 18) {
    console.log('Puedes votar de nuevo');    
} else {
    console.log('Aun no puedes votar');
}
Puedes votar de nuevo


//condition ? true: false;

var numero = 1;
var resultado = numero === 1 ? 'Soy un uno' : ' No soy un uno'

var numero = 1;
var resultado = numero === 1 ? 'Soy un uno' : ' No soy un uno';
console.log(resultado);
Soy un uno
undefined

var numero = 2;
var resultado = numero === 1 ? 'Soy un uno' : ' No soy un uno'
undefined
console.log(resultado)
No soy un uno


var piedra = 1;
var papel = 2;
var tijera = 3;

function juego(yo, usuario){
    if(yo == usuario){
        console.log('Empate');
    }else if(yo == 1 && usuario ==2){
        console.log('Gane esta partida');
    }else if(yo == 1 && usuario == 3){
        console.log('Ganaste vos');
    }else if(yo == 3 && usuario == 2){
        console.log('Ganaste de nuevo');
    }else if(yo == 3 && usuario == 1){
        console.log('Esta vez perdiste');
    }else if(yo == 2 && usuario == 1){
        console.log('Ganaste crack');
    }else if(yo == 2 && usuario 3){
        console.log('Perdiste de nuevo')
    }
}

juego()
