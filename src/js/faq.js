document.querySelectorAll('details').forEach(d => {
  const body = d.querySelector('.faq-body');
  if (!body) return;

  body.style.overflow = 'hidden';
  body.style.maxHeight = d.hasAttribute('open') ? body.scrollHeight + 'px' : '0px';
  body.style.transition = 'max-height 1.6s cubic-bezier(.18,.9,.32,1), opacity .9s ease';

  d.addEventListener('toggle', () => {
    if (d.open) {
      body.style.maxHeight = body.scrollHeight + 'px';
      body.style.opacity = '1';
      setTimeout(() => body.style.maxHeight = 'none', 700);
    } else {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
      });
    }
  });
});
