var swiper = new Swiper(".mysec4Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
   
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
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
