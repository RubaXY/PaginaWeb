const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    
    const answer = button.nextElementSibling;
    if (expanded) {
      answer.hidden = true;
    } else {
      answer.hidden = false;
    }
  });
});