(() => {
    const buttons = document.querySelectorAll('.course-buttons span');
    const courses = document.querySelectorAll('.course-slide');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Remove 'active' from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' to the clicked button
            button.classList.add('active');

            courses.forEach(course => {
                const category = course.dataset.category;

                if (filter === 'all' || category === filter) {
                    // show immediately
                    course.style.display = 'grid';
                    setTimeout(() => {
                        course.classList.remove('hide');
                    }, 10); // tiny delay to allow transition
                } else {
                    // fade out first
                    course.classList.add('hide');

                    // then remove from grid after transition
                    setTimeout(() => {
                        course.style.display = 'none';
                    }, 400); // match transition duration
                }
            });


        });
    });



    // profile menu button
    const menuButtons = document.querySelectorAll('.bottom .menu');
    const menuBodies = document.querySelectorAll('.menu-body .menu-active');

    menuBodies.forEach(body => body.classList.add('hide'));

    if (menuButtons.length > 0 && menuBodies.length > 0) {
        menuButtons[0].classList.add('active');
        menuBodies[0].classList.remove('hide');
    }

    menuButtons.forEach(button => {
        

        button.addEventListener('click', () => {

            // remove active from all buttons
            menuButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // hide all menu bodies
            menuBodies.forEach(body => body.classList.add('hide'));

            // show the matching menu body
            const buttonMenu = button.dataset.menu;

            menuBodies.forEach(body => {
                if (body.dataset.menu === buttonMenu) {
                    body.classList.remove('hide');
                }
            });

        });
    });

})();
