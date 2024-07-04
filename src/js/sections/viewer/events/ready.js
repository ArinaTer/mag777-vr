
import { setCopyRightTo } from '../../../../files/media_copy_right/js/set_copytight_to.js';
export function ready(viewerInstance) {
  viewerInstance.addEventListener('ready', (e) => {
    document.documentElement.classList.add('viewer-ready');
    setCopyRightTo('.psv-container.psv--has-navbar', true);
  }, { once: true });
};