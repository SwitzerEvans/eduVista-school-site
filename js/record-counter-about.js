let started = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            startCounter();
            observer.disconnect(); // stop observing after start
        }
    });
}, {
    threshold: 0.3 // 30% of section must be visible
});

observer.observe(document.getElementById("start-count"));

function startCounter() {
    const counters = document.querySelectorAll(".counter");
    const duration = 5000;
    const fps = 60;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const increment = target / (duration / (1000 / fps));
        let count = 0;

        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.innerText = target;
                clearInterval(interval);
            } else {
                counter.innerText = Math.floor(count);
            }
        }, 1000 / fps);
    });
}
