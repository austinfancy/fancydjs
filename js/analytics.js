(function () {
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-ga-cta]');
    if (!el || typeof gtag !== 'function') return;
    gtag('event', 'cta_click', {
      cta_label: el.getAttribute('data-ga-cta'),
      cta_location: el.getAttribute('data-ga-location') || ''
    });
  });
})();
