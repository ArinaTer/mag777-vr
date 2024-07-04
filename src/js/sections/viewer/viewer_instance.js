import { IS_IPADE } from '../../components/queries.js';

/**
   * viewer initialization
   */
export const viewerInstance = new PhotoSphereViewer.Viewer({
  plugins: [PhotoSphereViewer.GyroscopePlugin],
  container: document.querySelector(".viewer__wrapper"),
  defaultZoomLvl: 0,
  navbar: [!IS_IPADE ? "zoom" : '', "fullscreen"],
  minFov: 60,
  posePitch: 2,
  GyroscopePluginConfig: {
    absolutePosition: true,
    moveMode: "smooth",
    touchmove: true,
  },
});