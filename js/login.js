var formSignin = document.querySelector("#signin");
var formSignup = document.querySelector("#signup");
var btnColor = document.querySelector(".btncolor");

document.querySelector("#btnin").addEventListener("click", () => {
  formSignin.style.left = "0%";
  formSignup.style.left = "100%";
  btnColor.style.left = "0%";
});

document.querySelector("#btnup").addEventListener("click", () => {
  formSignin.style.left = "-100%";
  formSignup.style.left = "0%";
  btnColor.style.left = "50%";
});
