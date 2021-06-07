// simple button click event handler
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

//test btnHandler

btnHandler(".btn-log", function () {
  console.log('👋 Oh, hello there!');
});