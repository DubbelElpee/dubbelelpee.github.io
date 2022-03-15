var binPrice = 8.90;
var staplerPrice = 12.50;
var pencilholderPrice = 9.90;

var binStock = 7;
var staplerStock = 4;
var pencilholderStock = 5;

var binPurchased = 0;
var staplerPurchased = 0;
var pencilholderPurchased = 0;

var totalPrice = 0;



function loaded() {

    document.getElementById("p1").innerText = "Price " + binPrice;
    document.getElementById("p2").innerText = "Price " + staplerPrice;
    document.getElementById("p3").innerText = "Price " + pencilholderPrice;

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
        para.innerText = binPurchased + " bin(s) x " + binPrice + " = " + binPurchased * binPrice;
        document.body.appendChild(para);

        totalPrice += binPurchased * binPrice;
    }

    if (staplerPurchased > 0) {
        const para = document.createElement("p");
        para.innerText = staplerPurchased + " stapler(s) x " + staplerPrice + " = " + staplerPurchased * staplerPrice;
        document.body.appendChild(para);

        totalPrice += staplerPurchased * staplerPrice;
    }

    if (pencilholderPurchased > 0) {
        const para = document.createElement("p");
        para.innerText = pencilholderPurchased + " pencilholder x " + pencilholderPrice + " = " + pencilholderPurchased * pencilholderPrice;
        document.body.appendChild(para);

        totalPrice += pencilholderPurchased * pencilholderPrice;
    }

    if (totalPrice > 0) {
        const para = document.createElement("p");
        para.innerHTML = "Sum: " + totalPrice + "<BR/>" + "VAT 21%: " + totalPrice * 0.21 + "<BR/>" + "TOTAL: " + totalPrice * 1.21;
        document.body.appendChild(para);

    }



}

