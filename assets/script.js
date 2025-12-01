const form = document.querySelector(".form");
const passInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");
const passError = document.querySelector(".pass-error");
const emailError = document.querySelector(".email-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formValid = true;

  emailValid();
  passValid();

  window.location.href = "login-complete.html";
});

function emailValid() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailInput.value)) {
    emailInput.classList.add("input-error");
    emailError.style.display = "block";
    emailError.textContent = "Enter a valid email";
    emailError.classList.add("error");
    formValid = false;
  } else {
    emailInput.classList.remove("input-error");
    emailError.style.display = "none";
    formValid = true;
  }
}

function passValid() {
  if (passInput.value.length < 8 || passInput.value.length > 20) {
    passError.classList.add("input-error");
    passError.style.display = "block";
    passError.textContent = "Password mudt be between 8-20";
    passError.classList.add("error");
    formValid = false;
  } else {
    passInput.classList.remove("input-error");
    passError.style.display = "none";
    formValid = true;
  }
}
