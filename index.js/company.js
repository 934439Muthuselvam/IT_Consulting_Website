document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.companySwiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        speed: 3000, // Slide transition speed
        autoplay: true, // Disable autoplay completely
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
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
});
