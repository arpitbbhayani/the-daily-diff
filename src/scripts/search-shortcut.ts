document.addEventListener('keydown', (event) => {
  if (event.defaultPrevented || event.repeat || event.isComposing || event.altKey || event.shiftKey
    || !(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') return;

  event.preventDefault();
  const input = document.querySelector<HTMLInputElement>('#search-query');
  if (input) {
    input.focus();
    input.select();
  } else {
    window.location.assign('/search/');
  }
});
