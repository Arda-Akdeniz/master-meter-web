document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.stat-number');

  counters.forEach((counter) => {
    const text = counter.textContent.trim();

    const numberMatch = text.match(/\d+/);
    if (!numberMatch) return;

    const target = parseInt(numberMatch[0]);
    const prefix = text.substring(0, numberMatch.index);
    const suffix = text.substring(numberMatch.index + numberMatch[0].length);

    let current = 0;
    const duration = 3500; // 3.5 saniye
    const steps = 80;
    const increment = target / steps;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.floor(increment * frame);

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      counter.textContent = prefix + current + suffix;
    }, duration / steps);
  });
});
