 let categories = document.querySelectorAll('.category');

        categories.forEach(category => {
            let catHeader = category.querySelector('.cat-header');
            let catBody = category.querySelector('.cat-body');
            let arrow = category.querySelector('.arrow-image');

            // Hover effects
            catHeader.addEventListener('mouseenter', () => {
                catHeader.style.backgroundColor = 'rgb(220, 220, 220)';
            });
            catHeader.addEventListener('mouseleave', () => {
                catHeader.style.backgroundColor = '';
            });

            catHeader.addEventListener('click', function () {
                // Check if this category actually has a body (prevents errors on Home link)
                if (!catBody) return;

                const isActive = catBody.classList.contains('cat-body-active');

                // Close all other dropdowns
                categories.forEach(otherCategory => {
                    let otherBody = otherCategory.querySelector('.cat-body');
                    let otherArrow = otherCategory.querySelector('.arrow-image');
                    if (otherBody) otherBody.classList.remove('cat-body-active');
                    if (otherArrow) otherArrow.classList.remove('arrow-image-active');
                });

                // Toggle the clicked one only if it wasn't already open
                if (!isActive) {
                    catBody.classList.add('cat-body-active');
                    if (arrow) arrow.classList.add('arrow-image-active');
                }
            });
        });


        // sticky nav country dropdown

        const btn = document.getElementById("langBtn");
        const menu = document.getElementById("langMenu");

        btn.addEventListener("click", () => {
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });

        menu.querySelectorAll("li").forEach(item => {
            item.addEventListener("click", () => {
                btn.innerHTML = item.innerHTML + '<span class="arrow">▾</span>';
                menu.style.display = "none";
            });
        });

        // close when clicking outside
        document.addEventListener("click", e => {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = "none";
            }
        });