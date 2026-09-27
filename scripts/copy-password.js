const copyButton = document.querySelector("#copy-button");
const password = document.querySelector("#password");

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(password.textContent);
});