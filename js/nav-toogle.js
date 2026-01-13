let mobileNav = document.querySelector('.js-mobile-nav');

let hamburger = document.querySelector('.js-hamburger');
let hamburgerSpan = document.querySelectorAll('.js-hamburger-span');

hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active');

    if (mobileNav.classList.contains('mobile-nav-active')) {
        hamburgerSpan[0].classList.add('hamburger-first-child');
        hamburgerSpan[1].classList.add('hamburger-second-child');
        hamburgerSpan[2].classList.add('hamburger-last-child');

        document.body.classList.add('active');
    } else {
        hamburgerSpan[0].classList.remove('hamburger-first-child');
        hamburgerSpan[1].classList.remove('hamburger-second-child');
        hamburgerSpan[2].classList.remove('hamburger-last-child');

        document.body.classList.remove('active');
    }
});