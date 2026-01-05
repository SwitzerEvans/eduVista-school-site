let started = false;

        window.addEventListener("scroll", () => {
            let section = document.getElementById("records");
            let position = section.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight && !started) {
                started = true;

                const counters = document.querySelectorAll(".counter");
                const duration = 2000; // total animation time in ms
                const fps = 60; // updates per second

                counters.forEach(counter => {
                    const target = +counter.getAttribute("data-target");
                    const increment = target / (duration / (1000 / fps));
                    let count = 0;

                    const interval = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            count = target;
                            clearInterval(interval);
                        }
                        counter.innerText = Math.floor(count);
                    }, 1000 / fps);
                });
            }
        });