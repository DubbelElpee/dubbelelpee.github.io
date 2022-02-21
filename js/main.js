//var x = document.getElementById("myDIV");
var x = 3;
var created = false;

function loaded(){
    document.getElementById("para1").innerHTML = "This page is now loaded. <br/> The title is changed";
    document.getElementsByTagName("title")[0].innerText="Title changed by JS";
    document.getElementById("showButton").style.display="none";
   x++;
   console.log(x);

}

function clickMe(){    
    document.getElementById("para2").innerText = "OMG! You clicked a button!";
}

function changeStyle(){
    document.getElementById("para2").style.color="red";
    document.getElementById("para2").style.fontSize="x-large";

}

function removePara2(){
    document.getElementById("para2").remove();
}

function showCow(){    
    document.getElementById("img1").src = "/img/cow.jpg";
}

function showCat(){    
    document.getElementById("img1").src = "/img/cat.jpg";
}

function showDog(){    
    document.getElementById("img1").src = "/img/dog.jpg";
}

function hideImage() {

    //document.getElementById("img1").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("showButton").style.display="block";
    document.getElementById("hideButton").style.display="none";




   /* var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    */
  }

  
function showImage() {

    //document.getElementById("img1").style.display="block";
    document.getElementById("img1").style.display="block";
    document.getElementById("showButton").style.display="none";
    document.getElementById("hideButton").style.display="block";



   /* var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    */
  }


function createParagraph(){
    if(!created){
    const myParagraph = document.createElement("p");
    // myParagraph.setAttribute("id", "p3");
    myParagraph.innerText = "This is new paragraph, created by JS";

    document.body.appendChild(myParagraph);
    created=true;
    }
}






