document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle (persists)
  const btn = document.getElementById('themeToggle');
  const body = document.body;
  const stored = localStorage.getItem('themeLight');
  if (stored === '1') body.classList.add('light');
  function updateBtn(){ btn.textContent = body.classList.contains('light') ? '🌞' : '🌙'; }
  updateBtn();
  btn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    localStorage.setItem('themeLight', isLight ? '1' : '0');
    updateBtn();
  });

  // Playlists data (uses local assets if present; fallback SVG placeholders if not)
  const playlists = [
    { title: 'Pop Hits', sub: 'Músicas populares', img: 'assets/playlist1.jpg' },
    { title: 'Top Brasil', sub: 'Tocadas no Brasil', img: 'assets/playlist2.jpg' },
    { title: 'Treino', sub: 'Aumente o ritmo', img: 'assets/playlist3.jpg' },
    { title: 'Relax', sub: 'Músicas calmas', img: 'assets/playlist4.jpg' }
  ];

  const grid = document.getElementById('playlistGrid');
  // helper fallback data URL (SVG) if image not found
  const fallbackSVG = (title) => {
    const txt = encodeURIComponent(title);
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='%230a0a0a'/><text x='50%' y='50%' font-size='40' fill='%231db954' dominant-baseline='middle' text-anchor='middle' font-family='Arial'>${txt}</text></svg>`;
  };

  playlists.forEach((p) => {
    const el = document.createElement('div');
    el.className = 'playlist';

    // img element with onerror to fallback to inline SVG
    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = p.title;
    img.src = p.img;
    img.onerror = function(){ this.onerror = null; this.src = fallbackSVG(p.title.split(' ')[0]); };

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<div class="title">${p.title}</div><div class="sub">${p.sub}</div>`;

    el.appendChild(img);
    el.appendChild(meta);
    grid.appendChild(el);
  });

  // Simple reveal on scroll (graceful)
  const items = document.querySelectorAll('.playlist, .hero h1, .hero p');
  items.forEach(i => { i.style.opacity = 0; i.style.transition = 'all .6s ease'; });

  function reveal(){
    const trigger = window.innerHeight * 0.9;
    items.forEach(i => {
      const rect = i.getBoundingClientRect();
      if (rect.top < trigger) i.style.opacity = 1;
      else i.style.opacity = 0.15;
    });
  }
  reveal();
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
});
