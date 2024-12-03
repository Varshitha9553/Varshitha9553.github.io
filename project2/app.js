let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let prevButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let currentSlide = 0;

// Initialize the slider
slides[currentSlide].classList.add('active');
dots[currentSlide].classList.add('active');

// Next button click event
nextButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
});
prevButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
});

// Dot click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    });
});
