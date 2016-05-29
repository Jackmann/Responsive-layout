(function() {
  var elems = document.getElementsByClassName('info');

  for (var i = 0; i < elems.length; i++) {
    elems[i].addEventListener("click", highlightThis, true);
  }

  function highlightThis() {
    this.style.backgroundColor = 'darkgrey';
  }
})();
