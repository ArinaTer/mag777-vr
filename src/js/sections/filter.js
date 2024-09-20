/** @format */

export default function filter(selectedType) {
  const switchItems = document.querySelectorAll(".masterplan__switch-item");
  const contentItems = document.querySelectorAll("g[data-type]");
  const checkboxBlock = document.querySelector(".masterplan__checkbox");
  const checkboxItems = document.querySelectorAll(".masterplan__checkbox-item");
  const checkboxValues = document.querySelectorAll("g[data-value]");
  const selectedCheckbox = document.querySelector(`g[data-value="${selectedType}"]`);
  const selectedItem = document.querySelector(`.masterplan__checkbox-item[data-value="${selectedType}"]`);
  
  selectedCheckbox.classList.add("active");
  selectedItem.classList.add("active");


  switchItems.forEach((item) => {
    item.addEventListener("click", function () {
      switchItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      const selectedType = this.getAttribute("data-type");

      contentItems.forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(`g[data-type="${selectedType}"]`).forEach((el) => {
        el.classList.add("active");
      });

      if (selectedType === "exterior") {
        checkboxBlock.classList.add("hide");
      } else {
        checkboxBlock.classList.remove("hide");
      }
    });
  });

  checkboxItems.forEach((item) => {
    item.addEventListener("click", function () {
      checkboxItems.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      const selectedType = this.getAttribute("data-value");
      checkboxValues.forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(`g[data-value="${selectedType}"]`).forEach((el) => {
        el.classList.add("active");
      });
    });
  });
}
