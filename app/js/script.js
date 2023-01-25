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
