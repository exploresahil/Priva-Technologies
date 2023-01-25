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

const numberPad = document.getElementById("number-pad");
const mobileNumber = document.getElementById("mobile-number");
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "<"];
let cursorPos = 3;

// Create number pad buttons
for (let number of numbers) {
  const button = document.createElement("button");
  button.innerText = number;
  button.addEventListener("click", function () {
    if (number === "<") {
      if (mobileNumber.selectionStart > 3) {
        mobileNumber.value =
          mobileNumber.value.slice(0, mobileNumber.selectionStart - 1) +
          mobileNumber.value.slice(mobileNumber.selectionStart);
        cursorPos--;
      }
    } else {
      if (mobileNumber.value.length < 13) {
        mobileNumber.value =
          mobileNumber.value.substr(0, mobileNumber.selectionStart) +
          number +
          mobileNumber.value.substr(mobileNumber.selectionStart);
        cursorPos++;
      }
    }
  });
  numberPad.appendChild(button);
}

// allow to delete the last 10 digit via backspace button
mobileNumber.addEventListener("keydown", function (event) {
  if (
    event.code === "Backspace" &&
    mobileNumber.value.length > 3 &&
    mobileNumber.selectionStart > 3
  ) {
    event.preventDefault();
    mobileNumber.value =
      mobileNumber.value.slice(0, mobileNumber.selectionStart - 1) +
      mobileNumber.value.slice(mobileNumber.selectionStart);
    cursorPos--;
  }
});
