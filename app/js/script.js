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
});

gsap.to(".readyChar", {
  y: 500,
  stagger: 0.05,
  delay: 2.5,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,
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
});

gsap.to(".ready-afterChar", {
  y: 500,
  stagger: 0.05,
  delay: 0.5,
  duration: 0.3,
  ease: Power1.easeOut,
  repeat: -1,
  repeatDelay: 2,
});

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

confirmButton.addEventListener("click", function () {
  if (phoneNumber.value.length === 13) {
    // Do something with the phone number
  }
});

clearButton.addEventListener("click", function () {
  phoneNumber.value = "+91";
});
