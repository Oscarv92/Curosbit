/*let vehiculo = prompt("Digite el tipo de vehiculo");
let modelo = prompt("Digite el modelo de su vehiculo");
let placa = prompt("Digite la placa de su vehiculo");
let valorseguro = 0;

let modelo_conversion = parseInt(modelo);

if(vehiculo == "moto"){
    valorseguro = 600000;
}

else if (vehiculo == "carro"){
    valorseguro = 500000;
}

if (modelo_conversion>2010){
    alert("Se gano una lavada gratis");
}*/

//ciclo while, es una estructura que cumple la funcion del mientras, es un ciclo-bloque, cuando la condicion se rompa deja pasar


/*let contador = 1;
let tabla = prompt("digite la tabla que desea multiplicar");
let limmite = prompt("digite un limite");
while (contador<= parseInt (limmite)){
    //alert(tabla + " x " + contador + " = " + (tabla * contador));
    document.write(tabla + " x " + contador + " = " + (tabla * contador) + "<br>");
    contador++;
}
alert("Fin de Ciclo");*/

// toLocaleLowerCase convertir todas las letras en minusculas
//toLocaleUpperCase convertir todas las letras en mayusculas

/*let palabra = ""
while(palabra.toLocaleLowerCase() != "oscar"){
    palabra = prompt("Digite la palabra");
    if(palabra.toLocaleLowerCase() == "oscar");{
        document.write("Palabra correcta");
    }
}*/

/*let contador=1;
let limite= prompt("Digite la cantidad de articulos");
let acum=0
let prom=0
while (contador<= parseInt(limite)){
let articulo = prompt("digite el articulo que va a comprar");
let precio= parseInt(prompt("Digite el precio"));

document.write(articulo +"<br>");
document.write(precio +"<br>");

console.log(articulo);
console.log(precio);

acum=(precio+acum);
//acum+=precio;
prom=acum/contador;

document.write(acum +"<br>");

document.write("El promedio es: " +prom +"<br>");

console.log(acum);



contador++;
}*/

/*let respuesta="BOGOTA";
let acierto= false;
let contador=0;

while(contador < 3 && acierto === false){
    let respuesta_usuario = prompt("¿Cual es la capital de Colombia?")
    if(respuesta_usuario.toUpperCase()===respuesta){
        acierto= true;
        document.write("Correcto, has acertado");
    }
    contador++;
}
if(acierto==false){
    document.write("Se acabaron los intentos, solo eran 3")
}*/

/*
Ciclo: for: tambien es un recorrido, lo conociamos con el para. Basicamente realiza lo mismo que el while- utilizado en arreglos.
*/

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}*/

/*let tabla=5;
let limite=10;

for(let i=1; i <= limite; i++){
    let multi= tabla*i;
    console.log("Soy un for");
    document.write("tabla del " +tabla + "x" + i + "=" + multi + "<br>");
}*/

/*
let voto=0;
let total_votos_candidato_A=0;
let total_votos_candidato_B=0;
let total_votos_candidato_C=0
let total_votos=0;
let promedio_votos=0;

let cantidad_votantes= parseInt(prompt("Digite la cantidad de votantes"));

for(let i=0; i < cantidad_votantes; i++){

    voto=prompt("Digite el candidato: \n 1.Candidato A \n 2.Candidato B \n 3.Candidato C");
    
    if(voto==1){

        total_votos_candidato_A=total_votos_candidato_A+1;

    }

    else if(voto==2){
        total_votos_candidato_B=total_votos_candidato_B+1;
    }

    else if(voto==3){
        total_votos_candidato_C=total_votos_candidato_C+1;
    }

    total_votos=total_votos_candidato_A+total_votos_candidato_B+total_votos_candidato_C;
    
}

if(total_votos_candidato_A>total_votos_candidato_B + total_votos_candidato_C){
    alert("Gano candidato A con:" + total_votos_candidato_A);
}

else if(total_votos_candidato_A==total_votos_candidato_B==total_votos_candidato_C){
    alert("todos empatados")
}

else if(total_votos_candidato_A==total_votos_candidato_B){
    alert("A y B empatados")
}

else if(total_votos_candidato_A==total_votos_candidato_C){
    alert("A y C empatados")
}

else if(total_votos_candidato_B==total_votos_candidato_C){
    alert("B y C empatados")
}

else if(total_votos_candidato_B>total_votos_candidato_A + total_votos_candidato_C){
    alert("Gano candidato B con:" +total_votos_candidato_B);
}

else{
    alert("Gano Candidato C con: " +total_votos_candidato_C);
}

alert("cantidad total de votos " + total_votos)*/