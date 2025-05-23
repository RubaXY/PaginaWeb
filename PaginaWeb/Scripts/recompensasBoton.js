const modal = document.getElementById('modal');
const btnsDonar = document.querySelectorAll('.donar-btn');
const btnCerrar = document.getElementById('cerrarModal');

btnsDonar.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
  });
});

btnCerrar.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});

// Cerrar modal si clicas fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.setAttribute('aria-hidden', 'true');
  }
});