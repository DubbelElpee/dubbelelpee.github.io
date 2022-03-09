var fibo1=1;
var fibo2=1;

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
  document.getElementById("p3").innerText = "Euro's = "+Math.round(120*inputValue3)/100;
}

function multiply(){
  let inputValue4 = document.getElementById("inputField4").value;
  let inputValue5 = document.getElementById("inputField5").value;
  document.getElementById("p4").innerText = "Product = "+inputValue4*inputValue5;
}

function toFahrenheid(){
  let inputValue6 = document.getElementById("inputField6").value;
  document.getElementById("p5").innerText = "Fahrenheid = "+((9/5)*inputValue6+32);
}

function area(){
  let inputValue7 = document.getElementById("inputField7").value;
  document.getElementById("p6").innerText = "Area = "+inputValue7*inputValue7*Math.PI;
}

function average(){
  let inputValue8 = document.getElementById("inputField8").value;
  let inputValue9 = document.getElementById("inputField9").value;
  document.getElementById("p7").innerText = (inputValue8*1.0+inputValue9*1.0)/2;

}

function fibo(){
  let fibo=fibo1+fibo2;
  document.getElementById("p8").innerText = fibo;

  fibo1=fibo2;
  fibo2=fibo;
}