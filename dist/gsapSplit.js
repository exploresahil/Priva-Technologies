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
