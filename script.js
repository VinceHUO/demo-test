// 移动端导航菜单
(function () {
  var btn = document.querySelector('.btn-menu');
  var nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    nav.classList.toggle('open');
    btn.setAttribute('aria-label', nav.classList.contains('open') ? '关闭菜单' : '打开菜单');
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
})();
