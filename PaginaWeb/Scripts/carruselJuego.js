const imagenes = document.querySelectorAll(".imagenes img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let indice = 0;

function mostrarImagen(i) {
  imagenes.forEach(img => img.classList.remove("activo"));
  imagenes[i].classList.add("activo");
}

btnNext.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen(indice);
});

btnPrev.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(indice);
});