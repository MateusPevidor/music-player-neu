const range = document.getElementById('range');
function updateSlider(value) {
  document
    .querySelector(':root')
    .style.setProperty('--slider-completion', `${value}%`);
}
range.addEventListener('input', e => {
  value = e.target.value / 10;
  updateSlider(value);
});

let intervalId = null;
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('toggle')) {
      button.classList.toggle('active');
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      } else {
        intervalId = setInterval(() => {
          range.value = (Number(range.value) + 1).toString();
          updateSlider(range.value / 10);
        }, 10);
      }
      Array.from(button.children).forEach(child =>
        child.classList.toggle('hidden')
      );
    }
  });
});
