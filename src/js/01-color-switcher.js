const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', () => {
  changeColor = setInterval(() => {
    bodyColor = getRandomHexColor();
    document.body.style.backgroundColor = bodyColor;
  }, 1000);
  startBtn.disabled = true;
});
stopBtn.addEventListener('click', () => {
  clearInterval(changeColor);
  startBtn.disabled = false;
});
