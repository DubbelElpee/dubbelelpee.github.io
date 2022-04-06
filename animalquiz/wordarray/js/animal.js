animals=["dog", "cat", "hippo"]
var i=0;

function nextAnimal(){
    i++;
    if(i<animals.length){
        document.getElementById("animal").innerText=animal[i];
    }
}