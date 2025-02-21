var contadorElemento = document.getElementById('contador');

var contador = 0;

function atualizarContador() {
    contadorElemento.innerText = contador;
}

document.getElementById('aumentar').addEventListener('click' , function () {
    contador++;
    atualizarContador();
});

document.getElementById('diminuir').addEventListener('click' , function () {
    contador--;
    atualizarContador();
});

document.getElementById('resetar').addEventListener('click' , function() {
    contador = 0;
    atualizarContador();
});
