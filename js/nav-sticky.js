let stickyNav = document.querySelector('.js-sticky-nav');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 75) {
        stickyNav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }else{
        stickyNav.style.backgroundColor = '';
    }
})