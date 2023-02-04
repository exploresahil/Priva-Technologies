//*----------> Open Popup Help

const help = document.querySelector("#help");
const helpPopup = document.querySelector("#helpPopup");
const helpClose = document.querySelector("#helpClose");

help.addEventListener("click", function () {
  helpPopup.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
  mobileNumber.pause();
});

helpClose.addEventListener("click", function () {
  helpPopup.classList.add("hidden");
  mainReady.classList.remove("visibilityHidden");
});
