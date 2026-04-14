const num = document.getElementById("num");
const increse = document.getElementById("increse");
const reset = document.getElementById("reset");
const decrese = document.getElementById("decrese");
let value = 0;
increse.onclick = function () {
  value++;
  num.textContent = value;
};
decrese.onclick = function () {
  value--;
  num.textContent = value;
};
reset.onclick = function () {
  value = 0;
  num.textContent = value;
};
