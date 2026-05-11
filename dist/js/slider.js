(function () {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const dots = Array.from(slider.querySelectorAll('.dot'));
  const prev = slider.querySelector('.slider-btn.prev');
  const next = slider.querySelector('.slider-btn.next');

  let i = 0;
  let timer = null;

  if (slides.length <= 1) {
    if (prev) prev.style.display = 'none';
    if (next) next.style.display = 'none';
    if (dots.length > 0) {
      dots.forEach(d => d.style.display = 'none');
    }
    return;
  }

  function setActive(index) {
    i = (index + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  function go(delta) { setActive(i + delta); }
  function start() {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    timer = window.setInterval(() => go(1), 4000);
  }
  function stop() { if (timer) window.clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }

  prev?.addEventListener('click', () => { go(-1); restart(); });
  next?.addEventListener('click', () => { go(1); restart(); });
  dots.forEach((d, idx) => d.addEventListener('click', () => { setActive(idx); restart(); }));

  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); restart(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); restart(); }
  });

  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', stop);
  slider.addEventListener('focusout', start);

  setActive(0);
  start();
})();
