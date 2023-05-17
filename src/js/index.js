const imagens = document.getElementById("imagem");
const imagem = document.querySelectorAll("#imagem imagem")

let index = 0;

function carrossel() {
    index++;
    if (index > imagem.length - 1) {
        index = 0;
    }

    imagens.style.transform = `translateX(${-index * 300}px)`;
}

setInterval(carrossel, 1800);