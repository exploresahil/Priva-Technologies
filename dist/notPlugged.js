//*----------> Open Popup not COMPATIBLE

const openButtonNotComp = document.querySelector("#openPopupNotComp");
const popupNotComp = document.querySelector("#popupNotComp");
var connectionFailed = document.getElementById("connectionFailed");

openButtonNotComp.addEventListener("click", function () {
  popupNotComp.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
  connectionFailed.load();
  connectionFailed.play();
  hello.pause();
  setTimeout(function () {
    popupNotComp.classList.add("hidden");
    mainReady.classList.remove("visibilityHidden");
  }, 1600);
});
