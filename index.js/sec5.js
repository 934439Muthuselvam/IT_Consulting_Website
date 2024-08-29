document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.clientReviewSwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 3000, // Slide transition speed
        autoplay: {
            delay: 3000, // Slide transition delay in milliseconds (3 seconds)
            disableOnInteraction: false, // Continue autoplay after user interactions
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
