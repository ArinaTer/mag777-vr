/** @format */

export function forms() {
  const forms = document.querySelectorAll('form[data-gtag-submit="form"]');
  console.log(forms);
  forms.forEach((form, event) => {
    form.addEventListener("submit", (event) => handleFormSubmit(form, event));
  });

  async function handleFormSubmit(el, event) {
    event.preventDefault();

    const selects = el.querySelectorAll(".dropdown-select");

    const firstName = el.querySelector('input[name="name"]').value;
    const lastName = el.querySelector('input[name="lastname"]').value;
    const email = el.querySelector('input[name="email"]').value;
    const phoneNumber = el.querySelector('input[name="phone"]').value;

    const countryCode = selects[0].value;

    const combinedValue = `First Name: ${firstName}; Last Name: ${lastName}; E-mail: ${email}; Country code: ${countryCode}; Phone number: ${phoneNumber};`;
    el.querySelector('input[name="pasted_fields"]').value = combinedValue;

    const formData = new FormData(event.target);
    console.log(event.target);
    console.log(el.querySelector('input[name="pasted_fields"]'));

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
