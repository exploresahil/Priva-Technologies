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

//*----------> Home click function
const home = document.querySelector("#home");

home.addEventListener("click", function () {
  window.location.href = "../index.html";
});
