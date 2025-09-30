// script.js — interatividade simples
document.addEventListener('DOMContentLoaded', () => {
  console.log('Site de Villa-Lobos carregado — autoria: SOPHIA');

  // Exemplo: animação leve ao rolar para as seções
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
});
