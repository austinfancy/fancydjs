(function () {
    var wrap = document.getElementById('testimonial-wrap');
    if (!wrap) return;
    var resumeTimer = null;
    function pause() {
      wrap.classList.add('paused');
      if (resumeTimer) clearTimeout(resumeTimer);
    }
    function resume() { wrap.classList.remove('paused'); }
    function resumeAfterDelay() {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(resume, 2500);
    }
    wrap.addEventListener('mouseenter', pause);
    wrap.addEventListener('mouseleave', resume);
    wrap.addEventListener('touchstart', pause, { passive: true });
    wrap.addEventListener('touchend', resumeAfterDelay, { passive: true });
  })();
