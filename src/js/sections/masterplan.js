import { removeClasses } from '../modules/functions.js';
import { mediaQueryMatches } from '../modules/functions.js';

export function masterplan() {
    const masterplan = document.querySelector('.masterplan');
    const intro = document.querySelector('.intro');
    const openMaster = gsap.utils.toArray('[data-show36]');
    const backtoMain = gsap.utils.toArray('[backto-main]');
    const toggleTextsIntro = gsap.utils.toArray('[data-toggle-visible]');

    // const masterplanSwipeHand = document.querySelector(".masterplan__swipe-hand");
    function toMasterplan() {
        gsap.to(toggleTextsIntro, {
            yPercent: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.2,
            onComplete: function () {
                gsap.set(masterplan, { className: 'masterplan _show' });
                gsap.set(document.body, { className: 'vr360' });
                // setTimeout(() => {
                gsap.set(intro, { className: 'intro hidden' });
                // }, 200);
            },
        });
    }

    function toIntro() {
        gsap.to(toggleTextsIntro, {
            onStart: function () {
                gsap.set(intro, { className: 'intro' });
                gsap.set(masterplan, { className: 'masterplan' });
                gsap.set(document.body, { className: '' });
            },
            yPercent: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
            // delay: 0.4,
        });
    }


    openMaster.forEach(btn => {
        btn.addEventListener('click', () => {
            toMasterplan();
        });
    });

    backtoMain.forEach(btn => {
        btn.addEventListener('click', () => {
            toIntro();
        });
    });

    function calculateAspectRatioDesc(height) {
        return height * 16 / 9;
    }
    function calculateAspectRatioMob(height) {
        return height * 9 / 16;
    }

    function handleResize() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        let aspectRatioHeight = Number.parseFloat(screenHeight / screenWidth * 100).toFixed(3);
        let aspectRatioWidth;

        if (!mediaQueryMatches('(max-width: 575.98px)')) {
            aspectRatioWidth = Number.parseFloat((calculateAspectRatioDesc(screenHeight) / screenWidth) * 100).toFixed(3);
            !(aspectRatioHeight > 100) ? masterplan.classList.remove('slightly-move-x') : masterplan.classList.add('slightly-move-x');
            !(aspectRatioHeight < 53) ? masterplan.classList.remove('slightly-move-y') : masterplan.classList.add('slightly-move-y');
        } else {
            aspectRatioWidth = Number.parseFloat((calculateAspectRatioMob(screenHeight) / screenWidth) * 100).toFixed(3);
        }


        document.documentElement.style.setProperty("--aspect-ratio", aspectRatioHeight);
        document.documentElement.style.setProperty("--aspect-ratio-width", aspectRatioWidth);
    }

    mm.add("(max-width: 1350px)", () => {
        Draggable.create(".masterplan__media", {
            bounds: ".masterplan__wrapper",
            type: "x",
            inertia: true,
        }
        );
    });

    mm.add('(max-width: 991px)', () => {
        gsap.set(".masterplan__media", { xPercent: -30 });
    });

    mm.add('(max-width: 780px)', () => {
        gsap.set(".masterplan__media", { xPercent: -40 });
    });

    mm.add('(max-width: 575px)', () => {
        gsap.set(".masterplan__media", { xPercent: -29 });
    });


    const hand = document.querySelector(".masterplan__draggable-hand");

    hand.addEventListener("click", () => {
        hand.classList.add("hide");
    });
    hand.addEventListener("touchstart", () => {
        hand.classList.add("hide");
    });


    handleResize();
    window.addEventListener('resize', handleResize);


    // Modal 360

    const modalIframe = document.querySelector(".modal360__iframe");
    const modal360 = document.querySelector(".modal360");

    document.addEventListener("click", function (e) {
        const target = e.target;

        if (target.closest('[data-modal360]')) {
            handleDots(target.closest('[data-modal360]'));
        }
        if (target.closest(".close-modal360")) {
            closeModal360();
        }
    });

    function handleDots(dot) {
        const path = dot.getAttribute('data-modal360');

        const dotTextTitle = dot.getAttribute('data-text') ? dot.getAttribute('data-text') : dot.querySelector(".dot-masterplan__text").innerHTML;
        const dotTextNum = dot.querySelector(".dot-masterplan__num");

        const closeTextBtn = document.querySelector(".modal360__close-btn h5");
        const closeTextP = document.querySelector(".modal360__close-btn p");

        modalIframe.innerHTML = `<iframe src="${path}" style="" frameborder="0"></iframe>`;
        closeTextP.innerHTML = dotTextTitle;
        closeTextBtn.innerHTML = dotTextNum?.innerHTML;

        if (closeTextBtn.innerHTML === 'undefined' || closeTextBtn.innerHTML === '') {
            closeTextBtn.style.display = 'none';
        } else {
            closeTextBtn.style.display = '';
        }

        modal360.classList.add("active");
        modal360.classList.add("shadow");

    }

    function closeModal360() {
        modalIframe.innerHTML = ``;
        modal360.classList.remove("active");
        modal360.classList.remove("shadow");
        document.documentElement.classList.remove("gallery-active");
    }

    const modalClosebtn = document.querySelector('.modal360__close-btn');



    const fullBtn = document.querySelector(".masterplan__selector-btn-full");
    const highlightBtn = document.querySelector(".masterplan__selector-btn-highlight");
    const fullImg = document.querySelector(".masterplan__img-full");
    const highlightImg = document.querySelector(".masterplan__img-highlight");
    const btnContainer = document.querySelector(".masterplan__selector-container");

    let activeBtn = fullBtn;

    document.querySelector(".masterplan__selector-container").addEventListener("click", function (event) {
        activeBtn.classList.remove("_active");
        if (activeBtn === fullBtn) {
            activeBtn = highlightBtn;

        } else {
            activeBtn = fullBtn;


        }
        activeBtn.classList.add("_active");

        if (activeBtn === fullBtn) {
            fullImg.classList.add("_active");
            highlightImg.classList.remove("_active");
            masterplan.classList.add("_active-full");
            masterplan.classList.remove("_active-highlight");
            btnContainer.classList.remove("active-container");


        } else {
            fullImg.classList.remove("_active");
            highlightImg.classList.add("_active");
            masterplan.classList.add("_active-highlight");
            masterplan.classList.remove("_active-full");
            btnContainer.classList.add("active-container");
        }
    });

    document.querySelector(".masterplan__back").addEventListener("click", function () {
        btnContainer.classList.remove("active-container");

        highlightBtn.classList.remove("_active");
        highlightImg.classList.remove("_active");
        masterplan.classList.remove("_active-highlight");

        fullBtn.classList.add("_active");
        fullImg.classList.add("_active");
        masterplan.classList.add("_active-full");

    });

    const selector = document.querySelector(".masterplan__selector");
    const screenWidth = window.innerWidth;

    if (screenWidth < 992) {

        selector.addEventListener("click", function () {
            activeBtn.classList.remove("_active");
            if (activeBtn === fullBtn) {
                activeBtn = highlightBtn;
            } else {
                activeBtn = fullBtn;
            }
            activeBtn.classList.add("_active");

            if (activeBtn === fullBtn) {
                fullImg.classList.add("_active");
                highlightImg.classList.remove("_active");
                masterplan.classList.add("_active-full");
                masterplan.classList.remove("_active-highlight");
                btnContainer.classList.remove("active-container");
            } else {
                fullImg.classList.remove("_active");
                highlightImg.classList.add("_active");
                masterplan.classList.add("_active-highlight");
                masterplan.classList.remove("_active-full");
                btnContainer.classList.add("active-container");
            }
        });
    }


}