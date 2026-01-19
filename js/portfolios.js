const portfolios = document.querySelectorAll('.portfolio');
let activePortfolio = null;

portfolios.forEach((portfolio) => {

    const searchIcon = portfolio.querySelector('.overlay-icon img');
    const dimSlides = portfolio.querySelectorAll('.overlay-dims .overlay-dim');
    const portfolioName = portfolio.querySelector('.name');

    const handleMouseover = () => {
        searchIcon.classList.add('active');
        dimSlides.forEach(dim => dim.classList.add('active'));
        portfolioName.classList.add('active');
    };

    const handleMouseout = (targetPortfolio = portfolio) => {
        const icon = targetPortfolio.querySelector('.overlay-icon img');
        const dims = targetPortfolio.querySelectorAll('.overlay-dims .overlay-dim');
        const name = targetPortfolio.querySelector('.name');

        icon.classList.remove('active');
        dims.forEach(dim => dim.classList.remove('active'));
        name.classList.remove('active');
    };

    // DESKTOP (hover)
    if (window.innerWidth >= 768) {
        portfolio.addEventListener('mouseenter', handleMouseover);
        portfolio.addEventListener('mouseleave', () => handleMouseout());
    }

    // MOBILE (click)
    if (window.innerWidth < 768) {
        portfolio.addEventListener('click', () => {

            // close previous
            if (activePortfolio && activePortfolio !== portfolio) {
                handleMouseout(activePortfolio);
            }

            // open current
            handleMouseover();
            activePortfolio = portfolio;
        });
    }
});





// let portfolios = document.querySelectorAll('.portfolio');

// portfolios.forEach((portfolio) => {

//     let searchIcon = portfolio.querySelector('.overlay-icon img');
//     let dimSlides = portfolio.querySelectorAll('.overlay-dims .overlay-dim');
//     let portfolioName = portfolio.querySelector('.portfolio .name');

//     const handleMouseover = () => {
//         // when i hover on each portfolio
//         searchIcon.classList.add('active');

//         dimSlides.forEach((dimSlide) => {
//             dimSlide.classList.add('active');
//         });

//         portfolioName.classList.add('active');
//     }

//     const handleMouseOut = () => {
//         // when i hover on each portfolio
//         portfolio.addEventListener('mouseout', () => {

//             searchIcon.classList.remove('active');

//             dimSlides.forEach((dimSlide) => {
//                 dimSlide.classList.remove('active');
//             });

//             portfolioName.classList.remove('active');
//         });
//     }

//     portfolio.addEventListener('mouseover', handleMouseover);
//     // portfolio.addEventListener('touchstart', handleMouseover);


//     portfolio.addEventListener('mouseout', handleMouseOut);
//     // portfolio.addEventListener('touchend', handleMouseOut);


// });
