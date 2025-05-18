let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight = Number(form.querySelector("#weight").value);
  const height = Number(form.querySelector("#height").value);

  console.log(name,weight,height);
  let heightInMeters=height/100;
  let bmi=Number((weight/heightInMeters**2).toFixed(2));
  console.log("bmi",bmi);
  let result;
  if(bmi<18.5){
    console.log("Thin");
    result="Thin";
  }else if(bmi>25){
    console.log("Fat");
    result="Fat";
  }else{
    console.log("Normal");
    result="Normal";
  }
 
  form.querySelector("#result").textContent = `${name.toUpperCase()}, You are ${result}`;
});

document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});