(function () {
    var video = document.getElementById('hero-video');
    if (!video) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) {
      video.removeAttribute('autoplay');
      video.pause();
    }
  })();
