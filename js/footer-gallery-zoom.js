(() => {
    const galleries = document.querySelectorAll('.js-footer-gallery div');

    galleries.forEach((gallery) => {
        // get zoom portfolio(single) body
        let singlePortfolioBody = document.querySelector('.zoom_body');
        
        gallery.addEventListener('click', () => {
            let galleryImage = gallery.querySelector('img');
            let imageSource = galleryImage.src;

            
            singlePortfolioBody.classList.add('active');

            let singleImage = document.querySelector('.image-container img');

            singleImage.src = imageSource;

            document.body.classList.add('active');

        });


        // close or remove zoom
        let closeZoom = document.querySelector('.close-hamburger');

        closeZoom.addEventListener('click', () => {
            singlePortfolioBody.classList.remove('active');

            //remove body overflow hidden
            document.body.classList.remove('active');
        });
    });
})();