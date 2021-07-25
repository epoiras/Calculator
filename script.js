//Calculate Tip
function calculateTip() {
  let bill = document.getElementById("bill").value;
  let serviceLevel = document.getElementById("serviceLevel").value;
  let clientsamount = document.getElementById("clientsamount").value;

  //Check to see if this input is empty or less than or equal to 1
  if (clientsamount === "" || clientsamount <= 1) {
    clientsamount = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tips
  let total = (bill * serviceLevel) / clientsamount;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
