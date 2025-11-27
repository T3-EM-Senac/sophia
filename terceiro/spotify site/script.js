document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (persists)
  const btn = document.getElementById('themeToggle');
  const body = document.body;
  const stored = localStorage.getItem('themeLight');
  if (stored === '1') body.classList.add('light');

  function setButton() { btn.textContent = body.classList.contains('light') ? '🌞' : '🌙'; }
  setButton();

  btn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('themeLight', isLight ? '1' : '0');
    setButton();
  });

  // Demo playlists data (no external API)
  const playlists = [
    { title: 'Pop Hits', sub: 'Músicas populares agora' },
    { title: 'Top Brasil', sub: 'Tocadas no Brasil' },
    { title: 'Treino', sub: 'Aumente o ritmo' },
    { title: 'Relax', sub: 'Músicas calmas para estudar' }
  ];

  const grid = document.getElementById('playlistGrid');
  playlists.forEach(p => {
    const el = document.createElement('div');
    el.className = 'playlist';
    el.innerHTML = `
      <div class="thumb">${p.title.split(' ')[0].slice(0,2).toUpperCase()}</div>
      <div class="meta">
        <div class="title">${p.title}</div>
        <div class="sub">${p.sub}</div>
      </div>
    `;
    grid.appendChild(el);
  });

  // Simple reveal on scroll (very small, no libs)
  const items = document.querySelectorAll('.card, .playlist, .hero h1, .hero p');
  function reveal() {
    const top = window.innerHeight * 0.9;
    items.forEach(i => {
      const r = i.getBoundingClientRect().top;
      if (r < top) i.style.opacity = 1;
      else i.style.opacity = 0.15;
    });
  }
  // initial styles
  items.forEach(i => { i.style.transition = 'all .6s ease'; i.style.opacity = 0; });
  reveal();
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
});
