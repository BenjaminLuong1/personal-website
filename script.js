// Fade-in sections as they scroll into view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section, .hobby-card, .about-card').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const bottom = top + section.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach((a) => a.classList.remove('active'));
      const active = document.querySelector(`nav ul a[href="#${section.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { passive: true });
