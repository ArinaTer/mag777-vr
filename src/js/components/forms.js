export function forms() {
  let popups = document.querySelectorAll('form[data-gtafg-submit]');
  console.log(popups)
  document.querySelector(".time-popup__form").addEventListener("submit", handleFormSubmit);

  async function handleFormSubmit(event) {
    
    event.preventDefault();

    const selects = document.querySelectorAll(".time-popup__form .dropdown-select");

    const firstName = document.querySelector('.time-popup__form input[name="name"]').value;
    const lastName = document.querySelector('.time-popup__form input[name="lastname"]').value;
    const email = document.querySelector('.time-popup__form input[name="email"]').value;
    const phoneNumber = document.querySelector('.time-popup__form input[name="phone"]').value;

    const countryCode = selects[0].value;

    const combinedValue = `First Name: ${firstName}; Last Name: ${lastName}; E-mail: ${email}; Country code: ${countryCode}; Phone number: ${phoneNumber};`;
    document.getElementById("pasted_fields").value = combinedValue;

    const formData = new FormData(event.target);
    try {
      const response = await fetch("https://form.sales-inquiries.ae/logger/form_receiver/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle successful response
        console.log("Form successfully submitted");
      } else {
        // Handle error response
        console.error("Error submitting form");
      }
    } catch (error) {
      // Handle network error
      console.error("Network error", error);
    }
  }
}
