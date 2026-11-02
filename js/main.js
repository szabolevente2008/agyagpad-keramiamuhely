const GA_MEASUREMENT_ID = '';
// Aktiváláskor a GA4 adminban is állíts be 2 hónapos eseménymegőrzést.

(() => {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobil-menu');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const setMenu = open => {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
    toggle.textContent = open ? 'Bezár' : 'Menü';
    document.body.classList.toggle('menu-open', open);
    main.inert = open;
    footer.inert = open;
  };
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (menu.hidden) return;
    if (event.key === 'Escape') { setMenu(false); toggle.focus(); }
    if (event.key === 'Tab') {
      const focusable = [...header.querySelectorAll('a, button')].filter(item => item.getClientRects().length);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const board = document.querySelector('.glaze-board');
  if (board && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    board.classList.add('glaze-enter');
    window.setTimeout(() => board.classList.remove('glaze-enter'), 1100);
  }
  const swatches = [...document.querySelectorAll('.swatch')];
  swatches.forEach(swatch => swatch.addEventListener('click', () => {
    swatches.forEach(item => item.setAttribute('aria-pressed', String(item === swatch)));
    document.getElementById('maz-valasztas').textContent = swatch.dataset.glaze + ' a kedvenced.';
  }));

  const form = document.forms.jelentkezes;
  if (form) {
    const type = new URLSearchParams(window.location.search).get('tipus');
    if (['kostolo', 'kurzus', 'csapatepito', 'utalvany'].includes(type)) form.elements.tipus.value = type;
    const fields = [...form.querySelectorAll('input:not([type="hidden"]), select, textarea')].filter(field => field.name !== 'bot-field');
    const message = field => {
      const validity = field.validity;
      if (validity.valueMissing) return field.type === 'checkbox' ? 'A küldéshez kérjük az adatkezelési hozzájárulásodat.' : field.tagName === 'SELECT' ? 'Kérjük, válassz egy típust.' : 'Kérjük, töltsd ki ezt a mezőt.';
      if (validity.typeMismatch) return 'Kérjük, adj meg egy érvényes e-mail-címet, például nev@pelda.hu.';
      if (validity.rangeUnderflow || validity.rangeOverflow || validity.stepMismatch || validity.badInput) return 'A létszám 1 és 6 közötti egész szám lehet.';
      if (validity.tooLong) return 'Kérjük, rövidítsd le a szöveget.';
      if (field.name === 'nev' && !field.value.trim()) return 'Kérjük, írd be a nevedet.';
      return '';
    };
    const validate = field => {
      field.setCustomValidity('');
      const error = message(field);
      field.setCustomValidity(error);
      const hint = document.getElementById(field.id + '-hiba');
      if (hint) { hint.textContent = error; hint.hidden = !error; }
      field.setAttribute('aria-invalid', String(Boolean(error)));
    };
    fields.forEach(field => {
      field.addEventListener('invalid', () => validate(field));
      field.addEventListener('input', () => { field.setCustomValidity(''); if (field.getAttribute('aria-invalid') === 'true') validate(field); });
      field.addEventListener('change', () => validate(field));
    });
    form.addEventListener('submit', event => {
      fields.forEach(validate);
      if (!form.checkValidity()) { event.preventDefault(); form.reportValidity(); }
    });
  }

  // Basic Consent Mode v2: elfogadás előtt nincs Google-hálózati kérés.
  const consentKey = 'agyagpad-cookie-consent-v1';
  const consentLifetime = 180 * 24 * 60 * 60 * 1000;
  const banner = document.getElementById('suti-banner');
  const status = document.getElementById('suti-statusz');
  let returnFocus = null;
  let analyticsLoaded = false;
  let statusTimer;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  const denied = {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
    functionality_storage: 'denied', personalization_storage: 'denied', security_storage: 'denied'
  };
  window.gtag('consent', 'default', denied);

  const clearAnalyticsCookies = () => {
    const parts = location.hostname.split('.');
    const domains = ['', ...parts.map((_, index) => '.' + parts.slice(index).join('.'))];
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!/^_ga(?:_|$)/.test(name)) return;
      domains.forEach(domain => {
        document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
      });
    });
  };
  const applyConsent = accepted => {
    // A visszavonás a már betöltött címke további mérését is letiltja.
    if (GA_MEASUREMENT_ID) window['ga-disable-' + GA_MEASUREMENT_ID] = !accepted;
    window.gtag('consent', 'update', { ...denied, analytics_storage: accepted ? 'granted' : 'denied' });
    if (!accepted) { clearAnalyticsCookies(); return; }
    if (!GA_MEASUREMENT_ID || analyticsLoaded) return;
    analyticsLoaded = true;
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 60 * 60 * 24 * 365,
      cookie_update: false,
      // Az űrlapmezők, query paraméterek és hash-ek nem kerülnek a mérésbe.
      page_location: location.origin + location.pathname,
      page_referrer: document.referrer.split(/[?#]/)[0]
    });
    const script = document.createElement('script');
    script.id = 'agyagpad-ga4';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);
  };
  let saved = null;
  try {
    const value = JSON.parse(localStorage.getItem(consentKey));
    if (value && typeof value.accepted === 'boolean' && Number.isFinite(value.at) && Date.now() - value.at >= 0 && Date.now() - value.at < consentLifetime) saved = value;
  } catch { /* Tiltott tárhely esetén a banner mentés nélkül is működik. */ }
  if (saved) { applyConsent(saved.accepted); banner.hidden = true; }
  else { banner.hidden = false; }
  document.querySelectorAll('[data-cookie-settings]').forEach(button => button.addEventListener('click', () => {
    if (!menu.hidden) setMenu(false);
    returnFocus = button;
    banner.hidden = false;
    banner.querySelector('button').focus();
  }));
  banner.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => {
    const accepted = button.dataset.consent === 'accept';
    try { localStorage.setItem(consentKey, JSON.stringify({ accepted, at: Date.now() })); } catch { /* A döntés az aktuális oldalon érvényes marad. */ }
    applyConsent(accepted);
    banner.hidden = true;
    status.textContent = accepted ? 'A sütiválasztásodat alkalmaztuk.' : 'Csak a szükséges tárolást engedélyezted.';
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { status.textContent = ''; }, 4500);
    if (returnFocus) { returnFocus.focus(); returnFocus = null; }
  }));
})();
