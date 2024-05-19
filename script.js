const portfolioContainer = document.querySelector('.portfolio-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showSlide(i) {
    index += i;
    if (index >= portfolioContainer.children.length) {
        index = 0;
    } else if (index < 0) {
        index = portfolioContainer.children.length - 1;
    }
    portfolioContainer.style.transform = `translateX(${-index * 100}%)`;
}

prevButton.addEventListener('click', () => showSlide(-1));
nextButton.addEventListener('click', () => showSlide(1));
