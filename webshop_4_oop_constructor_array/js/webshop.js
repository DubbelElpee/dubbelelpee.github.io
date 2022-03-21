
class Item {
    constructor(n, p, s, pur, imp) {
      this.name = n;
      this.price = p;
      this.stock= s;
      this.puchased=pur;
      this.imagePath =imp;
    }
}

var items=[];

// ADD ITEMS TO SHOP HERE
items.push(new Item("bin",8, 4,0,"img/bin.jpg"));
items.push(new Item("stapler",3,6,0,"img/stapler.jpg"));
items.push(new Item("pencilholder", 2, 3,0,"img/pencilholder.jpg"));
items.push(new Item("hole puncher",7,8, 0,"img/holepuncher.jpg"));
items.push(new Item("scissors",4,6,0,"img/scissors.jpg"));



var totalPrice = 0;

function loaded() {
    var targetDiv = document.getElementById('mainContent');

    for(var i=0; i<items.length; i++){
        console.log("LOOP #"+i);
        const content = document.createElement("div");

       //all divs float left, but last div must have diffent float style
       var c;
        if(i==items.length-1){
            c=' <div style: style="clear:right">'
        }
        else{
            c='<div style="float:left">'
        }

        content.innerHTML = c+
        '<img src='+items[i].imagePath+' /><br />'+
        '<p id=p'+i+'>Price '+items[i].price+'</p>'+
        '<p id=s'+i+'>In stock:'+items[i].stock+'</p>'+
        '<button onclick="buy('+i+')" id="rr">Buy '+items[i].name+'</button>'+
        '</div>';
        targetDiv.appendChild(content);
    }

}

function buy(it){
    var i=it;
    console.log("function buy, item ="+it);
    items[i].stock--;
    items[i].puchased++;


    document.getElementById('s'+i).innerText="In stock "+items[i].stock;
}

function checkOut() {
    for(var i=0;i<items.length;i++){
        totalPrice+=items[i].puchased*items[i].price;
    }
    document.getElementById("totalPrice").innerText="Totalprice = "+totalPrice;
}

