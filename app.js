const buyPrice = document.querySelector("#buy-price")
const stockQuantity = document.querySelector("#stock-quantity")
const sellPrice = document.querySelector("#sell-price")
const outputButton = document.querySelector("#output-button")
const outputResult = document.querySelector("#output-result")


function clickHandler (ip, qty, sp) {
    var ip = Number(buyPrice.value);
    var qty = Number(stockQuantity.value);
    var sp = Number(sellPrice.value);

    calculateResult(ip, qty, sp);
}

function calculateResult(purchasingPrice, quantity, sellingPrice) {
    if (purchasingPrice > sellingPrice) {
        var loss = (purchasingPrice - sellingPrice) * quantity;
        var lossPercentage = (loss/(purchasingPrice * quantity)) * 100
        outputResult.innerText = `Hey your loss is ${loss} and your loss percentage is ${lossPercentage}%`;
    } else if (sellingPrice > purchasingPrice) {
        var profit = (sellingPrice - purchasingPrice) * quantity;
        var profitPercentage = (profit/(purchasingPrice * quantity))*100;
        outputResult.innerText = `Hey your profit is ${profit} and profit percentage is ${profitPercentage}% `;
    } else {
        outputResult.innerText = "No profit No loss";
    }
}


outputButton.addEventListener("click", clickHandler)