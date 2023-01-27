//*----------> Hello Auto Play

var hello = document.getElementById("hello");

window.onload = function () {
  setInterval(function () {
    hello.play();
  }, 10000);
};

//*----------> Open Popup Help

const help = document.querySelector("#help");
const helpPopup = document.querySelector("#helpPopup");
const helpClose = document.querySelector("#helpClose");

help.addEventListener("click", function () {
  helpPopup.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
});

helpClose.addEventListener("click", function () {
  helpPopup.classList.add("hidden");
  mainReady.classList.remove("visibilityHidden");
});

//*----------> Date & Time

const date = new Date();
const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};
const ISToffset = 0; // 5.5 hours * 60 minutes * 60 seconds * 1000 milliseconds
const ISTtime = new Date(date.getTime() + ISToffset);
const dateString = ISTtime.toLocaleDateString("en-IN", options).replace(
  /\//g,
  "-"
);

const currentDate = document.getElementById("current-date");
currentDate.innerHTML = dateString;

const currentTime = document.getElementById("current-time");

function updateTime() {
  const date = new Date();
  const ISToffset = 0; // 5.5 hours * 60 minutes * 60 seconds * 1000 milliseconds
  const ISTtime = new Date(date.getTime() + ISToffset);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const timeString = ISTtime.toLocaleTimeString("en-IN", options);
  currentTime.innerHTML = timeString;
}

setInterval(updateTime, 1000);

//*----------> Open Popup

const openButton = document.querySelector("#openPopup");
const popup = document.querySelector("#popupFive");
const mainReady = document.querySelector("#mainReady");
const popupFive = new SplitType("#popupFive", {
  charClass: "popupFiveChar",
});
var chargerConnected = document.getElementById("chargerConnected");

openButton.addEventListener("click", function () {
  chargerConnected.play();

  gsap.from(".popupFiveChar", {
    y: 80,
    opacity: "0",
    stagger: 0.02,
    duration: 0.05,
    ease: Power1.easeOut,
  });

  gsap.to(".popupFiveChar", {
    y: -80,
    opacity: "0",
    stagger: 0.02,
    duration: 0.05,
    ease: Power1.easeOut,

    delay: 1.2,
  });

  popup.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
  setTimeout(function () {
    popup.classList.add("hidden");
    window.location.href = "./pages/mobile_number.html";
  }, 1600);
});

//*----------> Open Popup not COMPATIBLE

const openButtonNotComp = document.querySelector("#openPopupNotComp");
const popupNotComp = document.querySelector("#popupNotComp");
var connectionFailed = document.getElementById("connectionFailed");

openButtonNotComp.addEventListener("click", function () {
  popupNotComp.classList.remove("hidden");
  mainReady.classList.add("visibilityHidden");
  connectionFailed.load();
  connectionFailed.play();

  setTimeout(function () {
    
    popupNotComp.classList.add("hidden");
    mainReady.classList.remove("visibilityHidden");
  }, 1600);
});

//*----------> Split & Gsap

const ready = new SplitType(".ready", {
  charClass: "readyChar",
});

gsap.from(".readyChar", {
  y: -500,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,

  opacity: "0",
});

gsap.to(".readyChar", {
  y: 500,
  stagger: 0.05,
  delay: 2.5,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,

  opacity: "0",
});

const readyafter = new SplitType(".ready-after", {
  charClass: "ready-afterChar",
});

gsap.from(".ready-afterChar", {
  y: -500,
  stagger: 0.05,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,

  opacity: "0",
});

gsap.to(".ready-afterChar", {
  y: 500,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,

  opacity: "0",
});
