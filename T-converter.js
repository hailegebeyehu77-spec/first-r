const text = document.getElementById("text");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
let tem;
function convert() {
  if (tofahrenheit.checked) {
    tem = Number(text.value);
    tem = (tem * 9) / 5 + 32;
    result.textContent = tem.toFixed(1) + "F";
  } else if (tocelsius.checked) {
    tem = Number(text.value);
    tem = tem - (32 * 5) / 9;
    result.textContent = tem.toFixed(1) + "C";
  } else {
    result.textContent = "select a unit!";
  }
}
