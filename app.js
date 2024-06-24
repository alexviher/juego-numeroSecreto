/* Estan agregada la consola por defecto si quieres probar el juego 
autenticamente solo quita el console.log suerte :D */
let numeroSecreto = 0;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    
    if(numUsuario < numeroSecreto){
        asignarTextoElemento('p','El numero secreto es mayor');
    }else if (numUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor' );
        }
    limpiarCaja();
        
        
    if(numUsuario === numeroSecreto){
        asignarTextoElemento('p',`Felicidades ganaste en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    intentos ++;
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
   
}

function  generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','El juego a terminado no hay mas numeros');
    }else{
        //si el numero generado esta en lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Elige un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar juego
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Intentos
    condicionesIniciales();
    //Desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();