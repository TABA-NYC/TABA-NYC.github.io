/* Click-to-enlarge for case study figures.
   Usage: add class="zoomable" to any <img>, then load this file with defer.
   Opens at a readable width (never upscaling), click the image to toggle full
   resolution, click the backdrop or press Escape to close, arrows to cycle. */
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll('img.zoomable'));
  if (!imgs.length) return;

  var FIT = 2100;
  var lb = document.createElement('div');
  lb.className = 'cs-lb';
  lb.id = 'csLb';
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML = '<button class="close" aria-label="Close">&#10005;</button>' +
    '<button class="nav prev" aria-label="Previous">&#8249;</button>' +
    '<button class="nav next" aria-label="Next">&#8250;</button>' +
    '<img alt="">';
  document.body.appendChild(lb);

  var view = lb.querySelector('img');
  var idx = 0;

  function sizeImg() {
    var n = view.naturalWidth;
    if (!n) return;
    view.style.width = (lb.classList.contains('zoom') ? n : Math.min(FIT, n)) + 'px';
  }
  view.addEventListener('load', sizeImg);

  function show(i) {
    idx = (i + imgs.length) % imgs.length;
    view.src = imgs[idx].src;
    view.alt = imgs[idx].alt;
    lb.classList.remove('zoom');
    sizeImg();
    lb.scrollTop = 0;
    lb.scrollLeft = 0;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
  }
  function hide() {
    lb.classList.remove('open');
    lb.classList.remove('zoom');
    lb.setAttribute('aria-hidden', 'true');
  }

  imgs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i); });
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) hide(); });
  view.addEventListener('click', function (e) { e.stopPropagation(); lb.classList.toggle('zoom'); sizeImg(); });
  lb.querySelector('.close').addEventListener('click', hide);
  lb.querySelector('.prev').addEventListener('click', function (e) { e.stopPropagation(); show(idx - 1); });
  lb.querySelector('.next').addEventListener('click', function (e) { e.stopPropagation(); show(idx + 1); });
  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'z' || e.key === 'Z') { lb.classList.toggle('zoom'); sizeImg(); }
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
})();
