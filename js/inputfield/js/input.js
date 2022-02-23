function clickPress1(event) {
  if (event.keyCode == 13) {
    showValue(); 
  }
}

function showValue(){
    let inputValue1 = document.getElementById("inputField1").value; 
    document.getElementById("p1").innerHTML = inputValue1; 

}

function clickPress2(event) {
  if (event.keyCode == 13) {
    doubleNumber();
  }
}

function doubleNumber(){
  let inputValue2 = document.getElementById("inputField2").value;
  document.getElementById("p2").innerText = "Double is "+2*inputValue2;
}

function clickPress3(event) {
  if (event.keyCode == 13) {
    doubleNumber();
  }
}

function convert(){
  let inputValue3 = document.getElementById("inputField3").value;
  document.getElementById("p3").innerText = "Euro's"+1.2*inputValue3;
}