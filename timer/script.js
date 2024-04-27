let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function startTimer() {
    timer = setInterval(() => {
        milliseconds++;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
    }, 1);
}

document.getElementById('start').addEventListener('click', () => {
    if (!timer) {
        startTimer();
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('addSeconds').addEventListener('click', () => {
    milliseconds += 5000;
    if (milliseconds >= 1000) {
        milliseconds -= 1000;
        seconds++;
        if (seconds >= 60) {
            seconds -= 60;
            minutes++;
            if (minutes >= 60) {
                minutes -= 60;
                hours++;
            }
        }
    }
    document.getElementById('timer').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer = null;
    document.getElementById('timer').textContent = '00:00:00:000';
});
