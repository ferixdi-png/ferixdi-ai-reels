(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('mobile');
  if (burger && mobile) {
    const close = () => {
      mobile.style.display = 'none';
      burger.setAttribute('aria-expanded', 'false');
    };
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      if (open) return close();
      mobile.style.display = 'block';
      burger.setAttribute('aria-expanded', 'true');
    });
    mobile.addEventListener('click', (e) => {
      if (e.target === mobile) close();
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  // Payment links (replace with real payment URLs)
  const PAY = {
    single: 'https://example.com/pay/single',  // TODO: replace
    pack5:  'https://example.com/pay/pack5',   // TODO: replace
    month:  'https://example.com/pay/month',   // TODO: replace
  };

  const tariffField = document.getElementById('tariff');
  const payChoiceField = document.getElementById('pay_choice');
  const payBtn = document.getElementById('payBtn');

  function setTariff(key) {
    if (tariffField) tariffField.value = key;
    if (payChoiceField) payChoiceField.value = key;
    if (payBtn) payBtn.href = PAY[key] || '#';
    document.querySelectorAll('[data-fill]').forEach(b => b.classList.remove('is-active'));
  }

  document.querySelectorAll('[data-fill]').forEach(btn => {
    btn.addEventListener('click', () => setTariff(btn.getAttribute('data-fill')));
  });

  document.querySelectorAll('[data-pay]').forEach(a => {
    a.addEventListener('click', () => {
      const k = a.getAttribute('data-pay');
      setTariff(k);
      if (payBtn) payBtn.href = PAY[k] || '#';
    });
  });

  // Prefill via URL ?tariff=single|pack5|month
  const params = new URLSearchParams(location.search);
  const t = params.get('tariff');
  if (t && PAY[t]) setTariff(t);

  // On submit: if user picked a tariff but PAY is placeholder, still allow lead submit
  const form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', () => {
      // nothing special; Formspree handles it.
    });
  }
})();