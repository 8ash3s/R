(function () {
  const panels = document.querySelectorAll('.panel');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  panels.forEach((panel) => observer.observe(panel));

  const form = document.querySelector('.cta-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
      const notice = document.createElement('div');
      notice.textContent = 'Thanks! We will confirm your room shortly.';
      notice.className = 'form-notice';
      form.appendChild(notice);
      setTimeout(() => notice.remove(), 4000);
    });
  }
})();
