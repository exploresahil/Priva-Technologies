//*----------> Open Popup not in System

const openButtonNotInSys = document.querySelector("#openPopupNotInSys");
const popupNotInSys = document.querySelector("#popupNotInSys");

openButtonNotInSys.addEventListener("click", function () {
  mobileNumber.pause();
  popupNotInSys.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");

  setTimeout(function () {
    popupNotInSys.classList.add("hidden");
    mainReady.classList.remove("visibilityHidden");
  }, 3500);
});
