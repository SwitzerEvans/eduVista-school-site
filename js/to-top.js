let toTopBtn = document.querySelector('.js-fixed-btn');
let headsecttion = document.querySelector('.js-head-section');

window.addEventListener('scroll', () => {
    const rect = headsecttion.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
        toTopBtn.classList.add('fixed-btn-active');
    } else {
        toTopBtn.classList.remove('fixed-btn-active');
    }

    if (window.scrollY >= window.innerHeight) {
        toTopBtn.classList.add('fixed-btn-active');
    } else {
        toTopBtn.classList.remove('fixed-btn-active');
    }
});