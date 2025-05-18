const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);
  if(isSeatAvailable){
    console.log("Seat is available");
    if(isAgeAbove50){
        console.log("Age above 50");
        if(hasAadharCard){
            console.log("Has Aadhar Card");
            alert("please come inside the bus")
        }else{
            console.log("but you don't have Aadhar card");
            passengerStatus.textContent="seat is available,age above 50 years,but you don't have Aadharcard";
        }
    }else{
        console.log("but your age is below 50 years");
        passengerStatus.textContent="Seat is available,but your age is below 50 years";
    }
  }else{
    console.log("Seat is not available");
    passengerStatus.textContent="Seat is not available";
  }
});