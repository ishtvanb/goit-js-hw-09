function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let switchInterval = null;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;

        switchInterval = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();      
        }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(switchInterval);

    startBtn.disabled = false;
    stopBtn.disabled = true;
});
