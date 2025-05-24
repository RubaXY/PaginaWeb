const carrousel = document.getElementById('carrousel');
const btnPrev = document.querySelector('.boton.prev');
const btnNext = document.querySelector('.boton.next');
const elementos = document.querySelectorAll('.elemento');
const elementoWidth = elementos[0].offsetWidth + 20;
let index = 0;

function actualizar() {
  carrousel.scrollTo({
    left: index * elementoWidth,
    behavior: 'smooth',
  });
  btnPrev.disabled = index === 0;
  btnNext.disabled = index === elementos.length - 1;
}

btnPrev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    actualizar();
  }
});

btnNext.addEventListener('click', () => {
  if (index < elementos.length - 1) {
     index++;
     actualizar();    
  } 
});

actualizar();