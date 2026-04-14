const myrandom = document.getElementById("myrandom");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const max = 6;
const min = 1;
let random1;
let random2;
let random3;
myrandom.onclick = function () {
  const random1 = Math.floor(Math.random() * max) + min;
  const random2 = Math.floor(Math.random() * max) + min;
  const random3 = Math.floor(Math.random() * max) + min;
  label1.innerHTML = random1;
  label2.innerHTML = random2;
  label3.innerHTML = random3;
};
