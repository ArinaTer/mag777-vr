/** @format */

export default function filter(selectedType) {
  const switchItems = document.querySelectorAll(".masterplan__switch-item");
  const checkboxBlock = document.querySelector(".masterplan__checkbox");
  const checkboxItems = document.querySelectorAll(".masterplan__checkbox-item");
  const checkboxValues = document.querySelectorAll("g[data-value]");
  const selectedCheckbox = document.querySelector(`g[data-value="${selectedType}"]`);
  const selectedItem = document.querySelector(`.masterplan__checkbox-item[data-value="${selectedType}"]`);
  const switchBlock = document.querySelector(`.masterplan__switch`);

  selectedCheckbox.classList.add("active");
  selectedItem.classList.add("active");
  const contentItems = document.querySelectorAll("g[data-type]");
  switchItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const currentType = item.getAttribute("data-type");
      if (item.getAttribute("data-type") == "interior") {
        switchBlock.classList.add("active");
        checkboxBlock.classList.remove("hide");
      } else {
        switchBlock.classList.remove("active");
        checkboxBlock.classList.add("hide");
      }
      contentItems.forEach((el) => {
        if (el.getAttribute("data-type") === currentType) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
  });

  let activeItem = selectedItem;
  checkboxItems.forEach((item) => {
    item.addEventListener("click", function () {
      const currentValue = item.getAttribute("data-value");
      activeItem ? activeItem.classList.remove("active") : null;
      item.classList.add("active");
      activeItem = item;

      checkboxValues.forEach((el) => {
        if (el.getAttribute("data-value") === currentValue) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
  });
}
