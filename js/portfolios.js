let portfolios = document.querySelectorAll('.portfolio');

portfolios.forEach((portfolio) => {

    let searchIcon = portfolio.querySelector('.overlay-icon img');
    let dimSlides = portfolio.querySelectorAll('.overlay-dims .overlay-dim');
    let portfolioName = portfolio.querySelector('.portfolio .name ');

    const handleMouseover = () => {
        // when i hover on each portfolio
        searchIcon.classList.add('active');

        dimSlides.forEach((dimSlide) => {
            dimSlide.classList.add('active');
        });

        portfolioName.classList.add('active');
    }

    const handleMouseOut = () => {
        // when i hover on each portfolio
        portfolio.addEventListener('mouseout', () => {

            searchIcon.classList.remove('active');

            dimSlides.forEach((dimSlide) => {
                dimSlide.classList.remove('active');
            });

            portfolioName.classList.remove('active');
        });
    }

    portfolio.addEventListener('mouseover', handleMouseover);
    portfolio.addEventListener('touchstart', handleMouseover);


    portfolio.addEventListener('mouseout', handleMouseOut);
    portfolio.addEventListener('touchend', handleMouseOut);


});