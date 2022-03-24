var inputEl;
var feedbackEl;
var scoreEl;
var score;
var animalIndex;

var animals=[];

class Animal {
    constructor(n, i) {
      this.name = n;
      this.imagePath =i;
    }
}

function load(){
    animals.push(new Animal("Dog","img/dog.jpg"));
    animals.push(new Animal("Cat", "img/cat.jpg"));
    animals.push(new Animal("Donkey","img/donkey.jpg"));
    animals.push(new Animal("Cow","img/cow.jpg"));
    
    score=0;
    animalIndex=0;
    showAnimal(0);
    
}

function checkAnswer(){
    inputEl=document.getElementById("answer");
    feedbackEl=document.getElementById("feedback");
    scoreEl=document.getElementById("score");
    
    feedbackEl.innerText="";
    let inputValue = inputEl.value; 
    
    if(inputValue==animals[animalIndex].name){
        
        score++;
        scoreEl.innerText="Your score : "+score;
        animalIndex++;
        inputEl.value= "";

        showAnimal(animalIndex);

    
    }
    else{
        feedbackEl.innerText="Incorrect, the answer is "+animals[animalIndex].name+"! Try again!"
    }
}

function showAnimal(i){
    if(i==animals.length){
        document.getElementById("image").remove();
        document.getElementById("feedback").innerText= "The end.. well done!";
    }
    document.getElementById("image").src=animals[i].imagePath;
}
    
        
    
