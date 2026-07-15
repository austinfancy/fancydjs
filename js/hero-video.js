(function () {
    var video = document.getElementById('hero-video');
    if (!video) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;
    window.addEventListener('load', function () {
      video.play().catch(function () {});
    });
  })();
