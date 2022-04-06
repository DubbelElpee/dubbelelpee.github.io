
class Item {
    constructor(n, p) {
      this.name = n;
      this.price = p;
    }
}

var bin= new Item("bin",8);

var stapler = new Item("stapler", 3);
var pencilHolder = new Item("pencilholder", 2);

var items=3;

var binStock=5;
var binPurchased=0;

var staplerStock=3;
var staplerPurchased=0;

var pencilholderStock=8;
var pencilholderPurchased=0

var totalPrice = 0;

function loaded() {
    document.getElementById("p1").innerText = "Price " + bin.price;
    document.getElementById("p2").innerText = "Price " + stapler.price;
    document.getElementById("p3").innerText = "Price " + pencilHolder.price;

    document.getElementById("s1").innerText = "Stock " + binStock;
    document.getElementById("s2").innerText = "Stock " + staplerStock;
    document.getElementById("s3").innerText = "Stock " + pencilholderStock;

}

function binBuy() {

    console.log('bin');
    binPurchased++;
    binStock--;
    document.getElementById("s1").innerText = "Stock " + binStock;

    if (binStock == 0) {
        document.getElementById("s1").innerText = "OUT OF STOCK";
        document.getElementById("binBuyButton").style.display = "none";
    }

}

function staplerBuy() {
    if (staplerStock > 0) {
        staplerPurchased++;
        staplerStock--;
        document.getElementById("s2").innerText = "Stock " + staplerStock;
    }
}

function pencilholderBuy() {
    pencilholderPurchased++;
    pencilholderStock--;
    document.getElementById("s3").innerText = "Stock " + pencilholderStock;
}

function checkOut() {
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



}

