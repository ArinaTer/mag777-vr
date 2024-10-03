export function popups() {
let selects = document.querySelectorAll('.dropdown-select');
let selectForms = document.querySelectorAll('.form-select')

	fetch('https://form.sales-inquiries.ae/api/forms/country/info/', {
		headers: { Accept: 'application/json' }
	  })
		.then(response => response.json())
		.then(data => {
			selects.forEach((select,i) => {
				let options = select.querySelectorAll('option');
				selectForms[i].style.opacity='1';
				options.forEach(option => {
					if (option.value.startsWith(data.country)) { 
						option.selected = true;
						option.click();
					  }
				});
			  }); 
		})
		.catch(error => {
		  console.error('Error:', error); 
		});
	  
	// const popups = gsap.utils.toArray('.popup');
	// const popupCloseBtns = gsap.utils.toArray('[data-close-popup]');
	// const popupOpenBtns = gsap.utils.toArray('[data-open-popup]');
  
	// document.addEventListener("click", function (e) {
	// 	const target = e.target;
	// 	if (target.closest('[data-open-popup]')) {
	// 		const currentTarget = target.closest('[data-open-popup]');
	// 		const toOpen = currentTarget.getAttribute('data-open-popup').trim();
	// 		document.querySelector(toOpen).classList.toggle('popup-show');
	// 		document.documentElement.classList.toggle('popup-show');
	// 	}
	// });
  
	// popupCloseBtns.forEach(el => {
	// 	el.addEventListener("click", function (e) {
	// 		const closePopup = el.parentNode.parentNode?.getAttribute('id') || el.parentNode.parentNode.parentNode.getAttribute('id');
	// 		document.querySelector(`#${closePopup}`)?.classList.remove('popup-show');
	// 		// document.querySelector(`#${closePopup}`)?.classList.add('never-show');
	// 		document.documentElement.classList.remove('popup-show');
	// 	});
	// });

	const selectElement = document.querySelectorAll('.form-select');
	
	selectElement.forEach(el => {
		el.style.opacity = '0.45';
		
		el.addEventListener('change', function() {
		  if (el.value !== "Country Code") {
			el.style.opacity = '1';
		  } else {
			el.style.opacity = '0.45';
		  }
		});
	});


  
	const popupBtns = gsap.utils.toArray("[data-open-popup]");
	const popupCloseBtns = gsap.utils.toArray("[data-close-popup]");
  
	let currentModal = null;
	let currentBtn = null;
  
	popupBtns.forEach((el) => {
	  el.addEventListener("click", function (e) {
		const toOpen = el.getAttribute("data-open-popup").trim();
		const newModal = document.querySelector(toOpen);
  
		if (el === currentBtn) {
		  // Toggle: close the currently opened modal
		  if (currentModal.classList.contains("popup-show")) {
			currentModal.classList.remove("popup-show");
			// document.documentElement.classList.remove("popup-show");
			el.classList.remove("_active");
			currentModal = null;
			currentBtn = null;
			document.body.classList.remove("open-menu");
			// console.log('111');
		  } else {
			currentModal.classList.add("popup-show");
			// document.documentElement.classList.add("popup-show");
			el.classList.add("_active");
		  }
		} else {
		  document.body.classList.add(toOpen.slice(1));
		  document.body.classList.remove("open-menu");
		  newModal.classList.add("popup-show");
		//   document.documentElement.classList.add("popup-show");
		  el.classList.add("_active");
		  currentModal = newModal;
		  currentBtn = el;
		}
	  });
	});
  
	popupCloseBtns.forEach((el) => {
	  el.addEventListener("click", function (e) {
		window.scrollTo(0, 0);
  
		const closePopup =
		  el.parentNode.getAttribute("id") ||
		  el.parentNode.parentNode.getAttribute("id") ||
		  el.parentNode.parentNode.parentNode.getAttribute("id");
		const modalToClose = document.querySelector(`#${closePopup}`);
  
		// Close the modal
		modalToClose.classList.remove("popup-show");
		document.documentElement.classList.remove("popup-show");
  
		// modalToClose.querySelector('[data-open-popup]').classList.remove('_active');
		popupBtns.forEach((btn) => {
		  btn.classList.remove("_active");
		});
  
		document.body.classList.remove(closePopup);
  
		// Clear the currently opened modal and button if it's the one that's being closed
		if (modalToClose === currentModal) {
		  currentModal = null;
		  currentBtn = null;
		}
	  });
	});
  
	const mq = window.matchMedia("(max-width: 4000px) and (min-width: 991px)");
  
	const popupOpenGsap = document.querySelector('[data-open-popup="#popupDeveloper"]');
	if (mq.matches) {
	  popupOpenGsap.addEventListener('click', function() {
		gsapPopupOpen();
	  });
	}
  
	const popupCloseGsap = gsap.utils.toArray("#popupDeveloper [data-close-popup]");
	if (mq.matches) {
	  popupCloseGsap.forEach(function(btn) {
		btn.addEventListener('click', function() {
		  gsapPopupClose();
		});
	  });
	}
  
	function gsapPopupOpen() {
	  let tlPopupShow = gsap.timeline({});
	  tlPopupShow.from(".developer-popup__img", {
		yPercent: 150,
		duration: 0.8,
	  });
	  tlPopupShow.to(".developer-popup__img", {
		scale: 1.2,
		duration: 0.8,
	  });
  
	  tlPopupShow.to(".developer-popup__img-bg", {
		opacity: 0,
		duration: 0.8,
  
	  },"<");
  
	  tlPopupShow.to(".developer-popup__img-logo", {
		opacity: 0,
		duration: 0.8,
  
	  },"<");
  
	  tlPopupShow.to(".developer-popup__content", {
		clipPath: "inset(0 0 0 0)",
		delay: 0.2,
		duration: 0.7,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__content", {
		backgroundColor: "rgba(0, 0, 0, 0.9)",
	  },"<90%");
  
	  tlPopupShow.to(".developer-popup__img", {
		scale: 1,
		left: "0",
		top: "0",
		xPercent: 0,
		yPercent: 0,
		duration: 0.5,
	  },"<20%");
  
	  tlPopupShow.to(".developer-popup__close", {
		opacity: 1,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__sub h5", {
		opacity: 1,
		yPercent: -100,
		delay: 0.2,
	  },"<");
	  tlPopupShow.to(".developer-popup__title h3", {
		opacity: 1,
		yPercent: -100,
	  },"<");
	  tlPopupShow.to(".developer-popup__text p", {
		opacity: 1,
		yPercent: -100,
	  },"<");
	  tlPopupShow.to(".developer-popup__statis-line", {
		width: "100%",
	  },"<");
	  tlPopupShow.to(".developer-popup__statis-item", {
		opacity: 1,
		yPercent: -100,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__gradient ", {
		opacity: 1,
	  });
	}
	function gsapPopupClose() {
	  let tlPopupShow = gsap.timeline({});
	  tlPopupShow.from(".developer-popup__img", {
		yPercent: 0,
		duration: 0,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__img-bg", {
		opacity: 1,
		duration: 0,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__img-logo", {
		opacity: 1,
		duration: 0,
  
	  },"<");
  
	  tlPopupShow.to(".developer-popup__content", {
		clipPath: "inset(15% 26% 15% 26%)",
		backgroundColor: "rgba(0, 0, 0, 0)",
		duration: 0,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__img", {
		scale: 0.6,
		left: "50%",
		top: "35%",
		xPercent: -50,
		yPercent: -50,
		duration: 0,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__close", {
		opacity: 0,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__sub h5", {
		opacity: 0,
		yPercent: 100,
	  },"<");
	  tlPopupShow.to(".developer-popup__title h3", {
		opacity: 0,
		yPercent: 100,
	  },"<");
	  tlPopupShow.to(".developer-popup__text p", {
		opacity: 0,
		yPercent: 100,
	  },"<");
	  tlPopupShow.to(".developer-popup__statis-line", {
		width: "0",
	  },"<");
	  tlPopupShow.to(".developer-popup__statis-item", {
		opacity: 0,
		yPercent: 100,
	  },"<");
  
	  tlPopupShow.to(".developer-popup__gradient ", {
		opacity: 0,
	  },"<");
	}
  }
  