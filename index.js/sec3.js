var swiper = new Swiper(".myCustomSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // Slide transition delay in milliseconds (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        834: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});
