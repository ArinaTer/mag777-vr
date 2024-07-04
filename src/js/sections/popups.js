import { addClassName, removeClassName } from '../modules/functions.js';
import { addClassToAlter, removeClassToAlter } from './alter_parent_window.js';
import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);

export function popups() {
  const popupOpenBtns = document.querySelectorAll('[data-open-popup]');
  const closePopupBtns = document.querySelectorAll('[data-close]');
  const activeClassForBtn = '_active';
  const activeClassForPopup = 'popup_show';
  let activeOpenBtn;

  popupOpenBtns.forEach((openBtn) => {
    openBtn.addEventListener("click", () => {
      const popupId = openBtn.getAttribute('data-open-popup');
      const popupById = document.querySelector(`#${popupId}`);

      if (popupById) {
        addClassName(popupById, activeClassForPopup);
        addClassName(openBtn, activeClassForBtn);
        addClassToAlter();

        const tabPanes = popupById.querySelectorAll('.popup__tab');
        tabPanes.forEach((tabPane) => {
          const sliderElements = tabPane.querySelectorAll('.popup__swiper-main .swiper');
          const thumbElements = tabPane.querySelectorAll('.popup__swiper-thumb .swiper');

          sliderElements.forEach((slider) => {
            new Swiper(slider, {
              spaceBetween: 10,
              slidesPerView: 'auto',
              pagination: {
                el: '.popup__swiper-pagination.swiper-pagination',
                clickable: true,
              },
            });
          });

          thumbElements.forEach((thumbSlider) => {
            new Swiper(thumbSlider, {
              slidesPerView: 'auto',
              freeMode: true,
              spaceBetween: 10,
              watchSlidesProgress: true,
              allowTouchMove: false,
              effect: 'fade',
            });
          });
        });

        activeOpenBtn = openBtn;
      }
    });
  });

  closePopupBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", function (e) {
      const popup = closeBtn.closest('.popup');
      if (popup) {
        removeClassName(activeOpenBtn, activeClassForBtn);
        removeClassName(popup, activeClassForPopup);
        removeClassToAlter();
      }
    });
  });
};