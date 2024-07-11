document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
