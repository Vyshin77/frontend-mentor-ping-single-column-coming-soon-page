// const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const button = document.querySelector(".button");
const errorMessage = document.querySelector(".error-message");

button.addEventListener("click", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailInput.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.classList.remove("hidden");
  } else {
    emailInput.style.borderColor = "hsl(223, 100%, 88%)";
    errorMessage.classList.add("hidden");
  }
});
