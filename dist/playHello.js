//*----------> Hello Auto Play

var hello = document.getElementById("hello");

window.onload = function () {
  setInterval(function () {
    hello.play();
  }, 5000);
};
