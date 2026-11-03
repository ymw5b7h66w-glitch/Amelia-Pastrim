(() => {
  const intro = document.getElementById('intro');
  const shell = document.querySelector('.site-shell');
  const finishIntro = () => {
    intro.classList.add('done');
    shell.classList.add('ready');
    document.body.classList.add('loaded');
  };
  window.addEventListener('load', () => window.setTimeout(finishIntro, 2300));
  // Fallback in case a font or external asset is slow.
  window.setTimeout(finishIntro, 4000);

  document.getElementById('year').textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();