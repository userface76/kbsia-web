const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.pillar, .category-grid article, .news-grid article').forEach((el) => {
  observer.observe(el);
});


const viewportMeta = document.querySelector('meta[name="viewport"]');
const desktopViewBtn = document.getElementById('desktopViewBtn');
const mobileViewBtn = document.getElementById('mobileViewBtn');

function applySavedViewMode() {
  const mode = localStorage.getItem('kbsiaViewMode');
  if (mode === 'desktop' && viewportMeta) {
    viewportMeta.setAttribute('content', 'width=1200');
    document.documentElement.classList.add('force-desktop');
    if (desktopViewBtn) desktopViewBtn.hidden = true;
    if (mobileViewBtn) mobileViewBtn.hidden = false;
  }
}
applySavedViewMode();

desktopViewBtn?.addEventListener('click', () => {
  localStorage.setItem('kbsiaViewMode', 'desktop');
  location.reload();
});

mobileViewBtn?.addEventListener('click', () => {
  localStorage.removeItem('kbsiaViewMode');
  location.reload();
});
