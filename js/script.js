let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

showSlide(currentSlide); // Показуємо перший слайд одразу

setInterval(nextSlide, 3000); // Міняємо слайд кожні 3 секунди
