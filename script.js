let img = document.querySelector('img');

let audioEsquerdo = document.querySelector('#esquerdo');
let audioDireito = document.querySelector('#direito');

function tocar(event) {
    if (event.buttons === 1) {
        audioEsquerdo.currentTime = 0;
        audioEsquerdo.play();
        img.setAttribute('src', 'img/02.png',);
    }

    if (event.buttons === 2) {
        audioDireito.currentTime = 0;
        audioDireito.play();
        img.setAttribute('src', 'img/03.png',);
    }
}

function levantar(event) {
    img.setAttribute('src', 'img/01.png');
}

document.body.addEventListener('mousedown', tocar);
document.body.addEventListener('mouseup', levantar);