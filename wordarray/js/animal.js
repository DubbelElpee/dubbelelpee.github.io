animals=["dog","cat", "horse", "snake"];
var i=-1;

function nextAnimal(){
    i++;
    if(i<animals.length){
        document.getElementById("animal").innerText=animals[i];
    }
}