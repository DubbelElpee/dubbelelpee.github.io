var x=0;
var b737, b747, b777;
var planets=["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
var i=0;

function hideDog(){
    document.getElementById("im").style.display="none";
}

function showDog(){
    document.getElementById("im").style.display="block";
}

function reset(){
    document.getElementById("number").innerText=0;
    x=0;
}

function addOne(){
    x++;
    document.getElementById("number").innerText=x;   
}

function triple(){
   x*=3;
    document.getElementById("number").innerText=x;   
}

function planes(){
    console.log('planes!');
     b737={
        ip:"img/boeing_737.jpg",
        name:"Boeing 737",
        speed:850,
        chairs:186
    }
    
    
     b747={
        ip:"img/boeing_747.jpg",
        name:"Boeing 747",
        speed:920,
        chairs:408
    }

     b777={
        ip:"img/boeing_777.jpg",
        name:"Boeing 777",
        speed:905,
        chairs:408
    }

    document.getElementById("b737").innerHTML="<img src="+b737.ip+">"+"<p><b>"+b737.name+"</b></p><p>speed: "+b737.speed+"</p><p>chairs:"+b737.chairs+"</p>";
    document.getElementById("b747").innerHTML="<img src="+b747.ip+">"+"<p><b>"+b747.name+"</b></p><p>speed: "+b747.speed+"</p><p>chairs:"+b747.chairs+"</p>";
    document.getElementById("b777").innerHTML="<img src="+b777.ip+">"+"<p><b>"+b777.name+"</b></p><p>speed: "+b777.speed+"</p><p>chairs:"+b777.chairs+"</p>";
}

function previousPlanet(){
 
    if(i>0){
        i--;
        document.getElementById("planets").innerText=planets[i];
    }
}
function nextPlanet(){

    if(i<planets.length-1){
        i++;
        document.getElementById("planets").innerText=planets[i];
    }

}

function removePlanet(){
    planets.shift();
    console.log(planets);
}

function addPlanet(){
    planets.push("Planet");
    console.log(planets);
}

function addPlanetName(){
    planets.push(document.getElementById("planetName").value);
    console.log(planets);
}


