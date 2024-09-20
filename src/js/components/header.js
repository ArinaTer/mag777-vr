/** @format */

export function header(gsapOBserver) {
  let isScroll = false;
  const menuToggleBtn = document.querySelector(".header__menu-btn");

  menuToggleBtn.addEventListener("click", () => {
    if (!isScroll) {
      gsapOBserver.kill();
      isScroll = true;
    } else {
      if (!document.body.classList.contains("vr360")) {
        gsapOBserver.enable();
        isScroll = false;
      }
    }
    document.body.classList.toggle("open-menu");
  });

  // menuLockScroll.addEventListener("click", () => {
  //   if (lockScrollMenu) {
  //     gsapOBserver.kill();
  //     lockScrollMenu = false;
  //   } else {
  //     if (!document.body.classList.contains("vr360")) {
  //       gsapOBserver.enable();
  //       lockScrollMenu = true;
  //       console.log("vr360");
  //       // gsapOBserver.kill();
  //       // lockScrollMenu = false;
  //     }
  //   }
  // });
}
