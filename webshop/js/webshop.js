var binPrice = 8.90;
var staplerPrice = 12.50;
var pencilholderPrice = 9.90;

var binStock=7;
var staplerStock=4;
var pencilholderStock =5;

var binPurchased=0;
var staplerPurchased=0;
var pencilholderPurchased=0;



function loaded(){   

    document.getElementById("p1").innerText="Price "+binPrice;
    document.getElementById("p2").innerText="Price "+staplerPrice;
    document.getElementById("p3").innerText="Price "+pencilholderPrice;

    document.getElementById("s1").innerText="Stock "+binStock;
    document.getElementById("s2").innerText="Stock "+staplerStock;
    document.getElementById("s3").innerText="Stock "+pencilholderStock;

}

function binBuy() {
    console.log('bin');
    binPurchased++;
    binStock--;
    document.getElementById("s1").innerText="Stock "+binStock;

}

function staplerBuy(){
    stapler_p++;
    stapler_s--;
    document.getElementById("s2").innerText="Stock "+staplerStock;
}

function pencilholderBuy(){
    pencilholder_p++;
    pencilholder_s--;
    document.getElementById("s3").innerText="Stock "+pencilholderStock;
}

function checkOut(){
    
}

