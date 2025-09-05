function randomcolor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  document.body.style.backgroundColor = color;
}
const start = document.getElementById("start");
const stop = document.getElementById("stop");

let bgchange;
start.addEventListener("click", function () {
  bgchange = setInterval(randomcolor, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(bgchange);
});
