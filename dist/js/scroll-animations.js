/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Single observer for basic visibility
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .feature-item, .section-title, .about-split').forEach(el => {
    observer.observe(el);
  });

  // Single reusable observer for grid staggered animations
  const gridObserver = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll('.card, .feature-item, .stat-item');
        children.forEach((child, index) => {
          child.style.animationDelay = `${index * 0.1}s`;
        });
        gridObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.features-grid, .stats-grid, .contact, .grid3').forEach(container => {
    gridObserver.observe(container);
  });
});
