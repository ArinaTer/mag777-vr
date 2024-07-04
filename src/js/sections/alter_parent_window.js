
import { removeClassName, addClassName, toggleClassName } from '../modules/functions.js';

export function alterParentWindow() {
  const parentHtml = window.parent.document.documentElement;
  const alterClass = 'alter-parent-window';
  const galleryOpen = 'gallery-active';
  return {
    addClassToAlter(className = alterClass) {
      addClassName(parentHtml, className);
    },
    removeClassToAlter(className = alterClass) {
      removeClassName(parentHtml, className);
    },
    toggleClassToAlter(className = alterClass) {
      toggleClassName(parentHtml, className);
    },
  };

};

export const { addClassToAlter, removeClassToAlter, toggleClassToAlter } = alterParentWindow();
