// Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('heroCarousel');
    if (!track) return;
    
    let index = 0;
    const slides = track.children;
    const totalSlides = slides.length;
    
    function moveCarousel() {
        index = (index + 1) % totalSlides;
        const offset = index * -100;
        track.style.transform = `translateX(${offset}%)`;
    }
    
    // Auto-advance every 3 seconds
    setInterval(moveCarousel, 3000);
});

// Scroll Function
function scrollToOffer() {
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' });
    }
}
