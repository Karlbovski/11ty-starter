//** test module */
window.addEventListener('DOMContentLoaded', () => {

  const selectorId = '.btn-log';

  function btnHandler(selector, callback) {
    var btn = document.querySelector(selector);
    if (!btn) {
      return;
    }
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      callback();
    }, false);
  }

  btnHandler(selectorId, function () {
    console.log('👋 Oh, hello there!');
  });

});