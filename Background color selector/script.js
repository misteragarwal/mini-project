function colorchanger(newcolor) {
  document.body.style.backgroundColor = `${newcolor}`;
}
function applycolor() {
  const colordata = document.getElementById("name").value;
  colorchanger(colordata);
}
function applygivencolor(ele) {
  colorchanger(ele.value);
}
const butt = document.querySelectorAll(".button");
butt.forEach(function (but) {
  but.addEventListener("click", function (e) {
    document.body.style.backgroundColor = e.target.id;
  });
});
