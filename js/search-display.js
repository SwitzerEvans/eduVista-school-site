let searchImage = document.querySelector('.nav-search img');
let searchSection = document.querySelector('.search-grid');
let closeSearch = document.querySelector('.close-search .js-close-search');

searchImage.addEventListener('click', () => {
    searchSection.classList.add('search-grid-active');
});

closeSearch.addEventListener('click', () => {
    searchSection.classList.remove('search-grid-active');
});