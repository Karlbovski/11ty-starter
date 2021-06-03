window.addEventListener('DOMContentLoaded', () => {

  const
    toggleId = 'themetoggle',
    body = document.body;

  let
    theme =
    localStorage.getItem(toggleId) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // set body class
  body.classList.add(theme);
  id(toggleId).innerHTML = ((theme === "dark") ? 'light-theme' : 'dark-theme');

  // detect theme switch
  id(toggleId).addEventListener('click', e => {

    id(toggleId).innerHTML = theme + "-theme";

    e.preventDefault();

    body.classList.remove(theme);
    theme = (theme === 'dark' ? 'light' : 'dark');
    body.classList.add(theme);

    localStorage.setItem(toggleId, theme);

  });

});