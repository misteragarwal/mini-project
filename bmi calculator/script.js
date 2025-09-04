// method 1
// function calcbmi(){
//     const ht=document.getElementById('height').value;
//     const wt=document.getElementById('weight').value;
//     const ans=document.querySelector('#bmi');
//     const bmi=wt/(ht*ht);
//     ans.textContent=bmi;
// }
// const form = document.querySelector('form');

//method 2
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ht = parseInt(document.getElementById("height").value);
  const wt = parseInt(document.getElementById("weight").value);
  const ans = document.querySelector("#bmi");
  if (ht === "" || isNaN(ht)) {
    ans.innerHTML = "please enter valid height";
  } else if (wt === "" || isNaN(wt)) {
    ans.innerHTML = "please enter valid weight";
  } else {
    const bmi = (wt / (ht * ht)).toFixed(2);
    if (bmi <= 18.6) {
      ans.innerHTML = `BMI:${bmi}, you are Underweight`;
      ans.style.color = "orange";
    } else if (bmi > 24.9) {
      ans.innerHTML = `BMI:${bmi}, you are Overweight`;
      ans.style.color = "red";
    } else {
      ans.innerHTML = `BMI:${bmi}, you are in Normal range`;
      ans.style.color = "green";
    }
  }
});
