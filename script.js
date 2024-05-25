document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const presentBtn = document.getElementById('presentBtn');
    const presentImagesContainer = document.querySelector('.present-images');

    let counter = 0;

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        if (counter >= carouselImages.length - 1) return;
        counter++;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        console.log('Prev button clicked');
        if (counter <= 0) return;
        counter--;
        updateCarousel();
    });

    presentBtn.addEventListener('click', () => {
        console.log('Present button clicked');
        togglePresentImages();
    });

    function updateCarousel() {
        console.log('Updating carousel to slide:', counter);
        const size = carouselImages[0].clientWidth; // Use the width of one image
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    function togglePresentImages() {
        presentImagesContainer.classList.toggle('show');
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transition = 'none'; // Remove transition during resize
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});
