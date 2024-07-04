import { Fancybox } from "@fancyapps/ui";
import { setCopyRightTo } from '../../files/media_copy_right/js/set_copytight_to.js';
import { addClassToAlter, removeClassToAlter } from './alter_parent_window.js';
Fancybox.defaults.Hash = false;
export function gallery() {
  const galleryOpen = 'gallery-active';
  Fancybox.bind("[data-fancybox]", {
    Image: {
      zoom: false,
    },
    on: {
      initLayout: () => {
        setCopyRightTo('.fancybox__carousel', false);
        addClassToAlter(galleryOpen);
      },
      close: () => {
        removeClassToAlter(galleryOpen);
      },
    }
  });
};

