import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name = delay]');
const stepEl = document.querySelector('[name = step]');
const amountEl = document.querySelector('[name = amount]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
formEl.addEventListener('submit', evt => {
  evt.preventDefault();

  let delayVal = Number(delayEl.value);
  const stepVal = Number(stepEl.value);
  const amountVal = Number(amountEl.value);

  for (let i = 1; i <= amountVal; i += 1) {
    createPromise(i, delayVal)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayVal += stepVal;
    formEl.reset();
  }
});
