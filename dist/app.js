//*----------> Mobile Number Auto Play

var mobileNumber = document.getElementById("mobileNumber");

/* window.onload = function () {
  setInterval(function () {
    mobileNumber.play();
  }, 10000);
};
 */
//*----------> Mobile Number

const phoneNumber = document.getElementById("phone-number");
const buttons = document.getElementsByClassName("number");
const clearButton = document.getElementById("clear-button");
const backspaceButton = document.getElementById("backspaceButton");
const confirmButton = document.getElementById("confirm-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (phoneNumber.value.length < 13) {
      phoneNumber.value += this.innerHTML;
    }
  });
}

backspaceButton.addEventListener("click", function () {
  if (phoneNumber.value.length > 3) {
    phoneNumber.value = phoneNumber.value.substring(
      0,
      phoneNumber.value.length - 1
    );
    phoneNumber.selectionStart = phoneNumber.value.length;
  }
});

const mobNoSuccess = document.querySelector("#mobNoSuccess");

const mobNoSuccessST = new SplitType("#mobNoSuccess", {
  charClass: "mobNoSuccessChar",
});

confirmButton.addEventListener("click", function () {
  if (phoneNumber.value.length === 13) {
    mobNoSuccess.classList.remove("hidden");
    mainReady.classList.add("visibilityHidden");

    gsap.from(".mobNoSuccessChar", {
      y: 80,
      opacity: "0",
      stagger: 0.02,
      duration: 0.05,
      ease: Power1.easeOut,
    });

    gsap.to(".mobNoSuccessChar", {
      y: -80,
      opacity: "0",
      stagger: 0.02,
      duration: 0.05,
      ease: Power1.easeOut,

      delay: 1.2,
    });

    setTimeout(function () {
      mobNoSuccess.classList.add("hidden");
      mainReady.classList.remove("visibilityHidden");
      window.location.href = "../index.html";
    }, 1600);
  }
});

clearButton.addEventListener("click", function () {
  phoneNumber.value = "+91";
});

//*----------> Home click function

const home = document.querySelector("#home");

home.addEventListener("click", function () {
  window.location.href = "../index.html";
});

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
