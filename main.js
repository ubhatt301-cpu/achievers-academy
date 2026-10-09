// Achievers Academy — interactions
// Mobile nav, smooth scroll offset, counters, form validation, footer year.
(function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) { mobileMenu.hidden = false; } else { mobileMenu.hidden = true; }
  }
  menuBtn.addEventListener('click', () => {
    setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  // Active nav highlight on scroll
  const links = [...document.querySelectorAll('.desktop-nav .nav-link')];
  const sections = ['home', 'about', 'courses', 'achievements', 'contact']
    .map(id => document.getElementById(id)).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));

  // Animated counters (sample data only)
  const counters = document.querySelectorAll('.counter');
  const animate = el => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const dur = 1400, t0 = performance.now();
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.textContent = target.toLocaleString('en-IN'); return; }
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const cio = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { animate(e.target); cio.unobserve(e.target); } });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  // Contact form validation + demo success
  const form = document.getElementById('enquiryForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');

  function setError(id, msg) {
    const input = document.getElementById(id);
    const err = document.querySelector(`[data-error-for="${id}"]`);
    if (msg) { input.classList.add('invalid'); input.setAttribute('aria-invalid', 'true'); err.textContent = msg; }
    else { input.classList.remove('invalid'); input.removeAttribute('aria-invalid'); err.textContent = ''; }
    return !msg;
  }
  function validate() {
    const name = document.getElementById('fName').value.trim();
    const phone = document.getElementById('fPhone').value.trim();
    const msg = document.getElementById('fMsg').value.trim();
    let ok = true;
    ok = setError('fName', name.length < 2 ? 'Please enter your full name.' : '') && ok;
    const digits = phone.replace(/\D/g, '');
    ok = setError('fPhone', digits.length < 10 || digits.length > 13 ? 'Enter a valid phone number (10–13 digits).' : '') && ok;
    ok = setError('fMsg', msg.length < 10 ? 'Tell us your grade + subjects (min 10 characters).' : '') && ok;
    return ok;
  }
  ['fName', 'fPhone', 'fMsg'].forEach(id => {
    document.getElementById(id).addEventListener('input', validate);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    status.className = 'form-status';
    status.textContent = '';
    if (!validate()) {
      status.classList.add('error');
      status.textContent = 'Please fix the highlighted fields and try again.';
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Sending…';
    // DEMO ONLY: simulate delivery. To go live, POST FormData to your backend/Formspree here.
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = 'Send enquiry →';
      status.classList.add('success');
      status.textContent = 'Thank you! Your enquiry was validated successfully. (Demo: connect a backend or form service to actually receive messages.)';
      form.reset();
    }, 900);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
