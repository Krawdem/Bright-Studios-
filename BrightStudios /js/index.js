const TIMER_DURATION = 90;
let remainingTime = TIMER_DURATION;

const timerElement = document.getElementById('timer');
const headers = [document.getElementById('header-1'), document.getElementById('header-2')];
const footers = [document.getElementById('footer-1'), document.getElementById('footer-2')];
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function updateTimerDisplay(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    timerElement.textContent = `${minutes}:${seconds}`;
}

function toggleHeaderAndFooter() {
    headers.forEach(header => header.classList.toggle('active'));
    footers.forEach(footer => footer.classList.toggle('active'));
}

function startTimer() {
    remainingTime = TIMER_DURATION;
    updateTimerDisplay(remainingTime);

    const interval = setInterval(() => {
        remainingTime--;

        if (remainingTime <= 0) {
            clearInterval(interval);
            toggleHeaderAndFooter();
            startTimer();
        }

        updateTimerDisplay(remainingTime);
    }, 1000);
}

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

startTimer();
