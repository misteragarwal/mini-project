const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  fetchadata();
});
const requestURL = "https://api.github.com/users/misteragarwal";
let imgsrc;
let gitsrc;
let repocount;
function fetchadata() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL);
  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      document.getElementById('fetcheddata').innerHTML=this.responseText;
      gitsrc = data.html_url;
      document.getElementById("github").innerHTML = `Github: <a href="${gitsrc}">gitlink`;
      imgsrc = data.avatar_url;
      document.getElementById("101").setAttribute("src", imgsrc);
      repocount = data.public_repos;
      document.getElementById("repos").innerHTML = `Repos: ${repocount}`;
    }
  };
  xhr.send();
}
