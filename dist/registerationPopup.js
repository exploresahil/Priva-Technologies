const registerPopup = document.getElementById("openPopup");
const regPop = document.getElementById("regPop");

registerPopup.addEventListener("click", function () {
  regPop.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
});
