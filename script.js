let card = document.getElementById("card");


document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});


function moveNoButton(btn) {
  let width = window.innerWidth - btn.offsetWidth;
  let height = window.innerHeight - btn.offsetHeight;

  let newTop = Math.random() * height;
  let newLeft = Math.random() * width;

  btn.style.position = "absolute";
  btn.style.top = newTop + "px";
  btn.style.left = newLeft + "px";
}
let noButton = document.querySelector("#no");

noButton.addEventListener("mouseover", function () {
  moveNoButton(this);
});

noButton.addEventListener("touchstart", function () {
  moveNoButton(this);
});