/*var nombre ="Daniel Sotelo";
var altura= 1.90;
var concatena = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML =`
    <H1>sOY LA CAJA DE DATOS</H1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;



if(altura>=1.90){
    datos.innerHTML +=`<h1>Eres alto</h1>`;
}else{
    datos.innerHTML +=`<h1>Eres poco alto</h1>`;
}

for(var i =2000; i<=2020; i++){
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}*/

function Muestraminombre(nombre,altura){
  
   
    
    var misDatos=datos.innerHTML =`
        <H1>sOY LA CAJA DE DATOS</H1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura}</h3>`;
    return misDatos;

}

function imprimir(){
    var datos = document.getElementById('datos');
    datos.innerHTML =Muestraminombre("Daniel Sotelo", 190);

}

imprimir();

var nombres= ['Daniel','Juan','Roque'];
alert(nombres[1]);

/*document.write('<h1>NOMBRES</h1>')
for(i=0; i<nombres.length; i++){
    document.write(nombres[i] +'<br>');
}*/
nombres.forEach((nombre) =>{
    document.write(nombre +'<br>');

});
