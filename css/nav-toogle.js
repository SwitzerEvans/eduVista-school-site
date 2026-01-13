let categories = document.querySelectorAll('.category');

categories.forEach(category => {

    let catHeader = category.querySelector('.cat-header');
    let catBody = category.querySelector('.cat-body');
    let arrow = catHeader.querySelector('.arrow-image');

    catHeader.addEventListener('mouseenter', function(){
        catHeader.style.backgroundColor = 'rgb(241, 241, 241)';
    });

     catHeader.addEventListener('mouseleave', function(){
        catHeader.style.backgroundColor = '';
    });

    catHeader.addEventListener('click', function () {

        // Toggle this one
        catBody.classList.toggle('cat-body-active');
        arrow.classList.toggle('arrow-image-active');

        // Close all other dropdowns
        categories.forEach(otherCategory => {
            if (otherCategory !== category) {
                let otherCatBody = otherCategory.querySelector('.cat-body');
                let otherArrow = otherCategory.querySelector('.arrow-image');


                otherCatBody.classList.remove('cat-body-active');
                otherArrow.classList.remove('arrow-image-active');
            }
        });


    });

});