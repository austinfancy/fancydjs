(function () {
    var wrap = document.getElementById('testimonial-wrap');
    var track = document.getElementById('testimonial-track');
    if (!wrap || !track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var paused = false;
    var resumeTimer = null;
    function pause() {
      paused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    }
    function resume() { paused = false; }
    function resumeAfterDelay() {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(resume, 2500);
    }
    wrap.addEventListener('mouseenter', pause);
    wrap.addEventListener('mouseleave', resume);
    wrap.addEventListener('touchstart', pause, { passive: true });
    wrap.addEventListener('touchend', resumeAfterDelay, { passive: true });

    function step() {
      var oneSetWidth = track.scrollWidth / 2;
      if (oneSetWidth > 0 && !paused) {
        wrap.scrollLeft += 0.25;
        if (wrap.scrollLeft >= oneSetWidth) {
          wrap.scrollLeft -= oneSetWidth;
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  })();
