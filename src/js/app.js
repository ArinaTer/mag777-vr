import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
import { plugins } from "./modules/plugins.js";
import { gallery } from "./sections/gallery.js";
import { haveIntExt } from "./sections/swiper/haveIntExt.js";
import { setStylesForMediaCopyRight } from "../files/media_copy_right/js/set_styles_for_media_copy_right.js";
import { viewer } from "./sections/viewer/viewer.js";
import { viewerSwiper } from "./sections/swiper/viewerSwiper.js";
import { popups } from "./sections/popups.js";
import { floorplanTab } from "./sections/floorplanTab.js";
import { removeClassToAlter } from "./sections/alter_parent_window.js";
import { forms } from "./components/forms.js";

plugins();

document.addEventListener("DOMContentLoaded", function () {
  viewer();
  viewerSwiper();
  haveIntExt();
  gallery();
  floorplanTab();
  popups();
  setStylesForMediaCopyRight();
  forms();
});

window.addEventListener('unload', function (event) {
  removeClassToAlter();
});