function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice (price, amountNumber);
}

function showSumPrice(pricePerProduct =1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    
    if (amountNumber>10){
        alert("Maximum 10 terméket vásárolhat !");
    }
    else if (amountNumber<1){
        alert("Minimum 1 terméket kell vásárolnia !");
    }
    else {
    let amount = amountNumber * pricePerProduct;
    showAmount.innerHTML = amount ;
    }
}

//Add helptext
let helpText = document.createElement("small");
helpText.className = "form-text text-muted" ;
helpText.innerHTML = "Adja meg a feltéteket !";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// parent.removeChild(helpText);

// Window events
let sendButton = document.querySelector("form .btn.btn-primary");

/* Első módszer
sendButton.onclick = function () {
    alert("Hello JS");
}
*/

/* Második módszer
sendButton.onclick = calcAmount;
*/

// Harmadik módszer
sendButton.addEventListener("click", function(){
    alert("Hello JS");

});

// Átméretezés esemény
window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth);
});

// Űrlap események
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault;
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});

// parent element kezelése
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertBezaroFuggveny = function(ev){
    this.parentElement.style.display = "none";
}
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertBezaroFuggveny);
    
}

// select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}


// dátum lekérése
let weekDay = new Date().getDay();
let dayName = '';
switch(weekDay) {
    case 0: dayName = "Vas";
    break;
    case 1: dayName = "Hét";
    break;
    case 2: dayName = "Ked";
    break;
    case 3: dayName = "Sze";
    break;
    case 4: dayName = "Csü";
    break;
    case 5: dayName = "Pén";
    break;
    case 6: dayName = "Szo";
    break;
    default: dayName = "unknown";
}

/* while ciklus
let i = 0;
while (i < 10) {
    i++;
}

let animal = {name: "Cat", age: 3};
let keys = Object.keys(animal);
let i = 0;
while (i < keys.length) {
    console.log(animal[keys[i]]);
    i++;
}

*/

/* do while ciklus - egyszer mindenképp lefut !
let i = 10;
do {
    console.log(i);
    i++;
}
while (i < 0);
*/





