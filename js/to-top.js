const toTopBtn = document.querySelector('.js-fixed-btn');
const showAtVH = 1; // 1 = 100vh

window.addEventListener('scroll', () => {
    toTopBtn.classList.toggle(
        'fixed-btn-active',
        window.scrollY >= window.innerHeight * showAtVH
    );
});
