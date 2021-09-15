var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudientes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudientes(estudiantes[i]);
}
 Hola, Maria
 Hola, Sergio
 Hola, Rosa
 Hola, Daniel


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudientes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudientes(estudiante);
}
Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel
