const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let changeColor = null;
startBtn.addEventListener('click', () => {
  changeColor = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', () => {
  clearInterval(changeColor);
  startBtn.disabled = false;
});
