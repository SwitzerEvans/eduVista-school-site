(() => {
    const buttons = document.querySelectorAll('.portfolio-buttons button');
    const portfolios = document.querySelectorAll('.portfolio');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Remove 'active' from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' to the clicked button
            button.classList.add('active');
            
            portfolios.forEach(portfolio => {
                const category = portfolio.dataset.category;

                if (filter === 'all' || category === filter) {
                    // show immediately
                    portfolio.style.display = 'grid';
                    setTimeout(() => {
                        portfolio.classList.remove('hide');
                    }, 10); // tiny delay to allow transition
                } else {
                    // fade out first
                    portfolio.classList.add('hide');

                    // then remove from grid after transition
                    setTimeout(() => {
                        portfolio.style.display = 'none';
                    }, 400); // match transition duration
                }
            });


        });
    });
})();
