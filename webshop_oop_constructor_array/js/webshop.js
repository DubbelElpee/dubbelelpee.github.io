
class Item {
    constructor(n, p, imp) {
      this.name = n;
      this.price = p;
      this.imagePath =imp;
    }
}

var items=[];

// ADD ITEMS TO SHOP HERE
items.push(new Item("bin",8, "img/bin.jpg"));
items.push(new Item("stapler",3,  "img/stapler.jpg"));
items.push(new Item("pencilholder", 2, "img/pencilholder.jpg"));
items.push(new Item("dog",5,"img/dog.jpg"));
//ADD ITEMS IN STOCK FOR EACH ITEM:
var stockedItems=[3,8,4,9]; //3 bins, 8 staplers, 2 pencilholders
var puchasedItems=[0,0,0,0];

var totalPrice = 0;

function loaded() {
    var targetDiv = document.getElementById('mainContent');

    for(var i=0; i<items.length; i++){
        console.log("LOOP #"+i);
        const content = document.createElement("div");

       //all divs float left, but last div must have diffent float style
       var c;
        if(i==items.length-1){
            c='<div style="clear:both"></div>'
        }
        else{
            c='<div style="float:left"></div>'
        }



        content.innerHTML = c+
        '<img src='+items[i].imagePath+' /><br />'+
        '<p id=p'+i+'>Price '+items[i].price+'</p>'+
        '<p id=s'+i+'>In stock:'+stockedItems[i]+'</p>'+
        '<button onclick="buy('+i+')" id="rr">Buy '+items[i].name+'</button>'+
        '</div>';
        targetDiv.appendChild(content);
    }

}

function buy(it){
    var i=it;
    console.log("function buy, item ="+it);
    stockedItems[i]--;
    puchasedItems[i]++;
    document.getElementById('s'+i).innerText="In stock "+stockedItems[i];
}



function checkOut() {
    for(var i=0;i<items.length;i++){
        totalPrice+=puchasedItems[i]*items[i].price;
    }
    document.getElementById("totalPrice").innerText="Totalprice = "+totalPrice;


/*
    if (binPurchased > 0) {
        const para = document.createElement("p");
        para.innerText = binPurchased + " bin(s) x " + bin.price + " = " + binPurchased * bin.price;
        document.body.appendChild(para);

        totalPrice += binPurchased * bin.price;
    }

    if (staplerPurchased > 0) {
        const para = document.createElement("p");
        para.innerText = staplerPurchased + " stapler(s) x " + stapler.price + " = " + staplerPurchased * stapler.price;
        document.body.appendChild(para);

        totalPrice += staplerPurchased * stapler.price;
    }

    if (pencilholderPurchased > 0) {
        const para = document.createElement("p");
        para.innerText = pencilholderPurchased + " pencilholder x " + pencilHolder.price + " = " + pencilholderPurchased * pencilHolder.price;
        document.body.appendChild(para);

        totalPrice += pencilholderPurchased * pencilHolder.price;
    }

    if (totalPrice > 0) {
        const para = document.createElement("p");
        para.innerHTML = "Sum: " + totalPrice + "<BR/>" + "VAT 21%: " + totalPrice * 0.21 + "<BR/>" + "TOTAL: " + totalPrice * 1.21;
        document.body.appendChild(para);

    }
    */



}

