(() => {
    const portfolios = document.querySelectorAll('.portfolio');

    portfolios.forEach((portfolio) => {
        let zoomIcon = portfolio.querySelector('.overlay-icon img');

        //get zoom portfolio(single) body
        let singlePortfolioBody = document.querySelector('.zoom_body');

        // view the portfolio
        zoomIcon.addEventListener('click', () => {

            singlePortfolioBody.classList.add('active');

            let portfolioImage = portfolio.querySelector('img');

            let imageSource = portfolioImage.src;

            // get single imageframe

            let singleImage = document.querySelector('.image-container img');

            singleImage.src = imageSource;

            //add body overflow hidden
            document.body.classList.add('active');
        });

    });
})();