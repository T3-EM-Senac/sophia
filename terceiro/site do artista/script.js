// script.js — interatividade e animações
document.addEventListener('DOMContentLoaded', () => {
  console.log("Site Villa-Lobos carregado — autoria: SOPHIA");

  // Scroll suave (já garantido pelo CSS, mas reforçado no JS)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Animação dos cards (fade-in ao aparecer na tela)
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
