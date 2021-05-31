import * as dom from './dom.js';

window.addEventListener('DOMContentLoaded', () => {
    
    const
    toggleId = 'themetoggle',
    body = document.body;
    
    // Get Browser Local Storage or mediaQueryList object
    let
    theme =
      localStorage.getItem(toggleId) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // set body class
    body.classList.add(theme);

    //** can remove if not needed */
    if(theme === 'dark'){
      dom.id(toggleId).innerHTML = "light";
    }
    else {
      dom.id(toggleId).innerHTML = "dark";
    }

    // detect theme switch
    dom.id(toggleId).addEventListener('click', e => {

    dom.id(toggleId).innerHTML = theme; //** can remove if not needed */

    e.preventDefault();

    body.classList.remove(theme);
    theme = (theme === 'dark' ? 'light' : 'dark');
    body.classList.add(theme);

    // set Browser Local Storage
    localStorage.setItem(toggleId, theme);
    
  });

});