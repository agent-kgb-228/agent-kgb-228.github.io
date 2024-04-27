let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

document.getElementById('start').addEventListener('click', () => {
    startTimer();
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
});

document.getElementById('addSeconds').addEventListener('click', () => {
    seconds += 5;
    if (seconds >= 60) {
        seconds -= 60;
        minutes++;
        if (minutes >= 60) {
            minutes -= 60;
            hours++;
        }
    }
    document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});
