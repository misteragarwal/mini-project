const darkmode = document.getElementById("mode_switch");
const project_box=document.querySelectorAll('.project_box');
let mode = "light";
darkmode.addEventListener("click", () => {
    if (mode == "light") {
        document.body.style.backgroundColor = "#121212";
        darkmode.style.color = "yellow";
        project_box.forEach((e)=>{e.style.backgroundColor=`#788585`})
        mode = "dark";
    }
    else {
        document.body.style.backgroundColor = "white";
        darkmode.style.color = "white";
        project_box.forEach((e)=>{e.style.backgroundColor=` rgb(231, 215, 228)`})
        mode = "light";
    }
});
