var els = document.querySelectorAll("a[href='http://www.minecraftmarket.com']");
for (var i = 0, l = els.length; i < l; i++) {
  var el = els[i];
  el.parentNode.removeChild(el);
}
