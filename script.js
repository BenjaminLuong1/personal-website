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

// ── Modal ──
const researchCard  = document.getElementById('researchCard');
const researchModal = document.getElementById('researchModal');
const modalClose    = document.getElementById('modalClose');

function openModal() {
  researchModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  researchModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  researchCard.focus();
}

researchCard.addEventListener('click', openModal);

researchCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(); }
});

modalClose.addEventListener('click', closeModal);

researchModal.addEventListener('click', (e) => {
  if (e.target === researchModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !researchModal.hasAttribute('hidden')) closeModal();
});

// ── Civics Modal ──
const civicsCard       = document.getElementById('civicsCard');
const civicsModal      = document.getElementById('civicsModal');
const civicsModalClose = document.getElementById('civicsModalClose');

function openCivicsModal() {
  civicsModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  civicsModalClose.focus();
}

function closeCivicsModal() {
  civicsModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  civicsCard.focus();
}

civicsCard.addEventListener('click', openCivicsModal);

civicsCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCivicsModal(); }
});

civicsModalClose.addEventListener('click', closeCivicsModal);

civicsModal.addEventListener('click', (e) => {
  if (e.target === civicsModal) closeCivicsModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !civicsModal.hasAttribute('hidden')) closeCivicsModal();
});

// ── Certificate Modal ──
const certCard       = document.getElementById('certCard');
const certModal      = document.getElementById('certModal');
const certModalClose = document.getElementById('certModalClose');

function openCertModal() {
  certModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  certModalClose.focus();
}

function closeCertModal() {
  certModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
  certCard.focus();
}

certCard.addEventListener('click', openCertModal);

certCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCertModal(); }
});

certModalClose.addEventListener('click', closeCertModal);

certModal.addEventListener('click', (e) => {
  if (e.target === certModal) closeCertModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !certModal.hasAttribute('hidden')) closeCertModal();
});

// ── Smooth active nav link highlight on scroll
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
