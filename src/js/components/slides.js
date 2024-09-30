import { queryMatches } from "../modules/functions.js"
export function slides() {

    const Mobile = queryMatches(767.98, "max");
    const Desktop = queryMatches(768, "min");

    // let thumbSwiper = new Swiper(".paymentSwiperThumb", {
    //     modules: [Navigation, Controller],
    //     slidesPerView: "auto",
    //     centeredSlides: true,
    //     breakpoints: {
    //         0: {
    //             spaceBetween: 18,
    //         },
    //         767: {
    //             // spaceBetween: 30,
    //         },
    //         992: {
    //             centeredSlides: false,
    //             slidesPerView: 3,
    //             spaceBetween: 50,
    //         },
    //     },
    //     navigation: {
    //         nextEl: document.querySelector('.swiper-button-next'),
    //         prevEl: document.querySelector('.swiper-button-prev'),
    //     },
    // });

    // thumbSwiper.slideTo(1)

    // let mainSwiper = new Swiper(".paymentSwiper", {
    //     modules: [Controller, EffectFade, Thumbs],
    //     spaceBetween: 10,
    //     slidesPerView: 1,
    //     watchSlidesProgress: true,
    //     allowTouchMove: false,
    //     effect: "fade",
    //     thumbs: {
    //         swiper: thumbSwiper,
    //     }
    // });

    // if (Desktop) {
    //     let mainSwiper = new Swiper(".paymentSwiper", {
    //         modules: [Controller, EffectFade, Thumbs],
    //         spaceBetween: 10,
    //         slidesPerView: 1,
    //         watchSlidesProgress: true,
    //         allowTouchMove: false,
    //         effect: "fade",
    //         thumbs: {
    //             swiper: thumbSwiper,
    //         }
    //     });
    // }



    // if (Mobile) {
    //     let mainSwiper = new Swiper(".paymentSwiper", {
    //         modules: [Controller, EffectFade, Thumbs],
    //         spaceBetween: 10,
    //         slidesPerView: 1,
    //         watchSlidesProgress: true,
    //         allowTouchMove: false,
    //         effect: "fade",
    //     });
    //     thumbSwiper.controller.control = mainSwiper;
    //     mainSwiper.controller.control = thumbSwiper;
        
    //     mainSwiper.slideTo(1)

    // }

    let thumbSwiper;
let mainSwiper;

if (Desktop) {
    // Инициализация для десктопа
    thumbSwiper = new Swiper(".paymentSwiperThumb", {
        modules: [Navigation],
        slidesPerView: "auto",
        centeredSlides: false,
        breakpoints: {
            0: {
                spaceBetween: 18,
            },
            767: {
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: document.querySelector('.swiper-button-next'),
            prevEl: document.querySelector('.swiper-button-prev'),
        },
    });

    mainSwiper = new Swiper(".paymentSwiper", {
        modules: [EffectFade, Thumbs], // Controller отключен
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesProgress: true,
        allowTouchMove: false,
        effect: "fade",
        thumbs: {
            swiper: thumbSwiper, // В десктопной версии активен Thumbs
        }
    });

} else if (Mobile) {
    // Инициализация для мобильных устройств
    thumbSwiper = new Swiper(".paymentSwiperThumb", {
        modules: [Navigation, Controller], // Thumbs отключен
        slidesPerView: "auto",
        centeredSlides: true,
        
        breakpoints: {
            0: {
                spaceBetween: 18,
            },
            767: {
                spaceBetween: 30,
            }
        },
        navigation: {
            nextEl: document.querySelector('.swiper-button-next'),
            prevEl: document.querySelector('.swiper-button-prev'),
        },
    });

    mainSwiper = new Swiper(".paymentSwiper", {
        modules: [Controller, EffectFade], // Thumbs отключен
        spaceBetween: 10,
        slidesPerView: 1,
        watchSlidesProgress: true,
        allowTouchMove: false,
        effect: "fade",
    });

    thumbSwiper.controller.control = mainSwiper;
    mainSwiper.controller.control = thumbSwiper;
}

// Вручную переключаем на слайд 1
if (thumbSwiper && mainSwiper) {
    thumbSwiper.slideTo(1);
}


    // document.querySelectorAll('.paymentSwiperThumb').forEach((swiperEl, index) => {
    //     let thumbSwiper = new Swiper(swiperEl, {
    //         modules: [Navigation, EffectCoverflow],
    //         // effect: "coverflow",
    //         slidesPerView: "auto",
    //         centeredSlides: true,
    //         loop: true,
    //         loopAdditionalSlides: 6,
    //         // watchSlidesProgress: true,
    //         // spaceBetween: 50,
    //         // loop: true,
    //         // coverflowEffect: {
    //         //     rotate: 0,
    //         //     stretch: 0,
    //         //     depth: 0,
    //         //     modifier: 0,
    //         //     slideShadows: false,
    //         // },
    //         breakpoints: {
    //             0: {
    //                 spaceBetween: 18,
    //             },
    //             767: {
    //                 // spaceBetween: 30,
    //             },
    //             992: {
    //                 centeredSlides: false,
    //                 slidesPerView: 3,
    //                 spaceBetween: 50,
    //             },
    //         },
    //         navigation: {
    //             nextEl: document.querySelector('.swiper-button-next'),
    //             prevEl: document.querySelector('.swiper-button-prev'),
    //         },
    //     });

    //     let mainSwiper = document.querySelectorAll('.paymentSwiper')[index];

    //     new Swiper(mainSwiper, {
    //         modules: [Thumbs, EffectFade],
    //         spaceBetween: 10,
    //         slidesPerView: 1,
    //         watchSlidesProgress: true,
    //         allowTouchMove: false,
    //         effect: "fade",
    //         thumbs: {
    //             swiper: thumbSwiper,
    //         },
    //     });
    // });

}