import { addClassName, removeClassName } from '../../modules/functions.js';

export function haveIntExt() {
  const viewerInt = document.querySelectorAll(".viewer__swiper .swiper-slide.int");
  const viewerExt = document.querySelectorAll(".viewer__swiper .swiper-slide.ext");
  const viewerIntExtBtn = document.querySelector(".viewer-btn-int-ext");
  const viewer = document.querySelector(".viewer");


  if (viewerInt.length === 0) {
    addClassName(viewerIntExtBtn, "none");
    addClassName(viewer, "active-ext-slides");
    removeClassName(viewer, 'active-int-slides');
  }
  if (viewerExt.length === 0) {
    addClassName(viewerIntExtBtn, "none");
    removeClassName(viewer, "active-ext-slides");
    addClassName(viewer, 'active-int-slides');
  }
}
