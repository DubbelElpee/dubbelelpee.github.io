function showValue(){
    let inputValue = document.getElementById("inputField").value; 
    document.getElementById("p1").innerHTML = inputValue; 

}

function clickPress(event) {
    if (event.keyCode == 13) {
      showValue(); 
    }
}