document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const outerContainer = document.getElementById("outer-container");
  const successContainer = document.getElementById("success-container");
  const dismissBtn = document.getElementById("dismiss-btn");
  const userEmailSpan = document.getElementById("user-email");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value;
      if (validateEmail(email)) {
          userEmailSpan.textContent = email; // Set the email in the success message
          outerContainer.style.display = "none";
          successContainer.style.display = "block";
          emailInput.classList.remove("error"); // Remove error class
          errorMessage.textContent = ""; // Remove error message
      } else {
          emailInput.classList.add("error"); // Add error class
          errorMessage.textContent = "Please enter a valid email address."; // Show error message
      }
  });

  dismissBtn.addEventListener("click", () => {
      successContainer.style.display = "none";
      outerContainer.style.display = "block";
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});
