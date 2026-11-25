(function () {
  var side = document.querySelector('.side'), menu = document.querySelector('.menu');
  if (menu) menu.addEventListener('click', function () { side.classList.toggle('open'); });
  document.querySelectorAll('.pinbtn').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.closest('figure'), off = f.classList.toggle('nopins');
      b.textContent = off ? 'show numbers' : 'hide numbers';
    });
  });
  var lb = document.querySelector('.lb'), im = lb.querySelector('img'), last = null;
  function open(src, alt) { im.src = src; im.alt = alt; lb.hidden = false; lb.scrollTop = 0; lb.querySelector('button').focus(); }
  function close() { lb.hidden = true; im.removeAttribute('src'); if (last) last.focus(); }
  document.querySelectorAll('.shot').forEach(function (s) {
    s.tabIndex = 0; s.setAttribute('role', 'button'); s.setAttribute('aria-label', 'Show the picture at full size');
    var go = function () { last = s; var i = s.querySelector('img'); open(i.src, i.alt); };
    s.addEventListener('click', go);
    s.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lb.hidden) close(); });
})();
