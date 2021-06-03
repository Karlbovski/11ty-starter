// get element by class name
function className(className, doc = document) {
  return doc.getElementsByClassName(className);
}

// get element by Id
function id(id, doc = document) {
  return doc.getElementById(id);
}

// get single element CSS selector
function query(sel, doc = document) {
  return doc.querySelector(sel);
}

// get multiple element CSS selector
function queryAll(sel, doc = document) {
  return doc.querySelectorAll(sel);
}