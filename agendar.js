const cb = document.querySelector('#checkbox');
const telebusca = document.querySelector('.telebusca');


function Mostrar() {
if (cb.checked === true) {
    telebusca.classList.add('mostrar'); 
    telebusca.classList.remove('telebusca');
}
else {
    telebusca.classList.remove('mostrar');
    telebusca.classList.add('telebusca');
}
}

cb.addEventListener('click', Mostrar);