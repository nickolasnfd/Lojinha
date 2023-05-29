

let indiceSlide = 1;
mostrarSlide(indiceSlide);
// controle de proximo e anterior

function slide(n) {
    mostrarSlide(indiceSlide-=n);
};

// controle de imagem

function slideAtual(n) {
    mostrarSlide(indiceSlide = n);
};

function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("meuSlide");
    let pontos = document.getElementsByClassName("ponto-indicador");
    if (n > slides.length) {indiceSlide =1}
    if (n < 1) {indiceSlide = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

    for (i = 0; i < pontos.length; i++){
        pontos[i].className = pontos[i].className.replace("active","");
    }

    slides[indiceSlide-1].style.display = "block";
    pontos[indiceSlide-1].className += " active";
    
}
function myFunction() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
      x.className = "responsive";
    } else {
      x.className = "";
    }
  }