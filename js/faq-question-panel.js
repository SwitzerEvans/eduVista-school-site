let questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    let questionDetail = question.querySelector('.child');

    questionDetail.addEventListener('click', () => {
        question.classList.toggle('active');

        let icon = question.querySelector('.icon');

        if (question.classList.contains('active')) {
            icon.textContent = '−';
        }else{
            icon.textContent = '+';
        }
    });
});
