const relogio = document.querySelector('.relogio');
const butiniciar = document.querySelector('#iniciar');
const butpausar = document.querySelector('#pausar');
const butzerar = document.querySelector('#zerar');

butiniciar.addEventListener('click', function(event) {
    iniciaRelogio();
});

butpausar.addEventListener('click', function(event) {
    pausarRelogio();
});

butzerar.addEventListener('click', function(event) {
    zerarRelogio();
});

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

let segundos = 0;
let timer; 

function iniciaRelogio() {
    relogio.classList.remove('red');
    timer = setInterval(function(){
      segundos++;  
      relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

function pausarRelogio() {
    const pausar = setTimeout(function() {
        clearInterval(timer);
    }, 0);
    relogio.classList.add('red');
}

function zerarRelogio() {
    relogio.classList.remove('red');
    const zerar = setTimeout(function() {
        clearInterval(timer);
    })
    relogio.innerHTML = '00:00:00';
    segundos = 0;
}