import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
startBtn.disabled = true;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return alert('Please choose a date in the future!!!', {
        timeout: 1000,
      });
    }

    startBtn.disabled = false;

    startBtn.addEventListener('click', function () {
      startBtn.disabled = true;
      inputEl.disabled = true;

      setCurrentTime(selectedDates[0]);
      intervalId = setInterval(() => {
        setCurrentTime(selectedDates[0]);
      }, 1000);
    });
  },
};

const fp = flatpickr(inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setCurrentTime(futureTime) {
  const timeData = convertMs(futureTime - Date.now());
  timekeeper(timeData);

  isTimerOver(convertMs(futureTime - Date.now()));
}

function timekeeper(value) {
  daysEl.textContent = `0${value.days}`;
  hoursEl.textContent = value.hours;
  minutesEl.textContent = value.minutes;
  secondsEl.textContent = value.seconds;
}

function isTimerOver({ days, hours, minutes, seconds }) {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    alert('Your timer is over!!!', {
      timeout: 1000,
    });
    inputEl.disabled = false;
  }
}
