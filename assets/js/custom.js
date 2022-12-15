var swiper = new Swiper(".company", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        "500": {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        "700": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "1000": {
            slidesPerView: 5,
            spaceBetween: 20,
        },

    },

});

var swiper = new Swiper(".treadmark-content", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     "400": {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },
    //     "500": {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },
    //     "700": {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     "900": {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
        

    // },
});

let nav = document.querySelector('nav');
let bars = document.querySelector('.mobile-menu');

bars.addEventListener ("click", ()=>{
nav.classList.toggle('close')
})