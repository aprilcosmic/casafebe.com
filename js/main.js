// Casa Febe
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // entrada de la portada
  requestAnimationFrame(function () { document.body.classList.add('loaded'); });

  // textos que se "encienden" palabra por palabra con el scroll
  var wordBlocks = [].slice.call(document.querySelectorAll('[data-words]'));
  wordBlocks.forEach(function (el) {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) {
      return '<span class="w">' + w + '</span>';
    }).join(' ');
  });

  var nav = document.getElementById('nav');
  var hero = document.querySelector('.hero');
  var wa = document.querySelector('.wa-float');
  var contacto = document.getElementById('contacto');
  var plx = [].slice.call(document.querySelectorAll('[data-parallax]'));
  var vh = window.innerHeight;

  function frame() {
    var heroB = hero.getBoundingClientRect().bottom;
    nav.classList.toggle('solid', heroB < 80);

    var c = contacto.getBoundingClientRect();
    var inContacto = c.top < vh && c.bottom > 0;
    wa.classList.toggle('show', heroB < 0 && !inContacto);

    if (!reduce) {
      plx.forEach(function (el) {
        var r = el.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        var k = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        var mid = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + (mid * -k).toFixed(1) + 'px,0)';
      });
    }

    wordBlocks.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var words = el.children;
      // progreso: empieza cuando el bloque entra por abajo, termina a media pantalla
      var p = (vh * 0.92 - r.top) / (vh * 0.92 - vh * 0.38 + r.height * 0.5);
      p = Math.max(0, Math.min(1, p));
      if (reduce) p = 1;
      var lit = Math.round(p * words.length);
      for (var i = 0; i < words.length; i++) words[i].style.opacity = i < lit ? 1 : 0.18;
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { frame(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { vh = window.innerHeight; onScroll(); });
  frame();

  // aparición de imágenes y bloques
  var targets = document.querySelectorAll('.wipe, .tipos, .contacto-head, .canales, .historia-text .label, .historia-p, .firma, .foot-slogan');
  [].forEach.call(targets, function (el) { if (!el.classList.contains('wipe')) el.classList.add('rise'); });
  if (!('IntersectionObserver' in window) || reduce) {
    [].forEach.call(targets, function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  [].forEach.call(targets, function (el) { io.observe(el); });
})();
