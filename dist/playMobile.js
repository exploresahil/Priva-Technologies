//*----------> Mobile Number Auto Play

var mobileNumber = document.getElementById("mobileNumber");

window.onload = function () {
  setInterval(function () {
    mobileNumber.play();
  }, 5000);
};
