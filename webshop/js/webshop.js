var bin = 8.90;
var stapler = 12.50;
var pencilholder = 9.90;

var bin_s=7;
var stapler_s=4;
var pencilholder_s =5;

function loaded(){
   

    document.getElementById("p1").innerText="Price "+bin;
    document.getElementById("p2").innerText="Price "+stapler;
    document.getElementById("p3").innerText="Price "+pencilholder;

    document.getElementById("s1").innerText="Stock "+bin_s;
    document.getElementById("s2").innerText="Stock "+stapler_s;
    document.getElementById("s3").innerText="Stock "+pencilholder_s;

}

function binBuy() {
    console.log('bin');
    bin_s--;
    document.getElementById("s1").innerText="Stock "+bin_s;

}

function staplerBuy(){
    stapler_s--;
    document.getElementById("s2").innerText="Stock "+stapler_s;
}

function pencilholderBuy(){

    pencilholder_s--;
    document.getElementById("s3").innerText="Stock "+pencilholder_s;
}