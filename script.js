const CONTACT_EMAIL = 'finn@fhmgrowth.com';
// Paste a GoHighLevel (or other) booking page link here and every Book a Call button goes to it.
const BOOKING_URL = '';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Book a Call buttons: the booking page if there is one, otherwise an email to Finn.
const bookHref = BOOKING_URL ||
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Book a 15-min call')}&body=${encodeURIComponent('Hi Finn,\n\nI’d like to book a call about getting more estimates.\n\nCompany:\nTrade:\nPhone:\nBest time to call:\n')}`;
document.querySelectorAll('[data-book]').forEach((a) => {
  a.href = bookHref;
  if (BOOKING_URL) { a.target = '_blank'; a.rel = 'noopener'; }
});

document.getElementById('year').textContent = new Date().getFullYear();

// The trade word in the headline cycles: furnace, roofing, plumbing, basement.
const words = [...document.querySelectorAll('.rotator__word')];
const rotator = document.querySelector('.rotator');
const fitRotator = (word) => { rotator.style.width = `${word.scrollWidth}px`; };
if (words.length) document.fonts.ready.then(() => fitRotator(words.find((w) => w.classList.contains('is-on'))));
if (words.length && !reduceMotion) {
  let i = 0;
  setInterval(() => {
    const current = words[i];
    i = (i + 1) % words.length;
    current.classList.remove('is-on');
    current.classList.add('is-out');
    words[i].classList.remove('is-out');
    words[i].classList.add('is-on');
    fitRotator(words[i]);
    setTimeout(() => current.classList.remove('is-out'), 650);
  }, 2200);
}
