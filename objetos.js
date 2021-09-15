var miAuto = {
    marca: 'Toyoya',
    modelo: 'Corolla',
    annio: 2020  
};

miAuto
{marca: "Toyoya", modelo: "Corolla", annio: 2020}
miAuto.marca
"Toyoya"
miAuto.modelo
"Corolla"
miAuto.annio
2020


var miAuto = {
    marca: 'Toyoya',
    modelo: 'Corolla',
    annio: 2020,
    detalleDelAuto: function(){
         console.log(`Auto ${this.modelo} ${this.annio}`);   
    }  
};
 
miAuto.detalleDelAuto();
Auto Corolla 2020