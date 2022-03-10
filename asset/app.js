//Trasformo in variabili i dati ottenuti dall'input
let nameInput = document.getElementById('user_name');
let distanceInput = document.getElementById('distance');
let ageInput = document.getElementById('age');

// variabile per selezionare il bottone submit
let submitBtn = document.getElementById('button');

//variabile per selezionare il bottone annulla
let delBtn = document.getElementById('remove');

//seleziono i div del biglietto
//nome passeggero
let passenger = document.getElementById('passenger');
//promozione
let promo = document.getElementById('promo');
//carrozza 
let cab = document.getElementById('cab');
//codice CP
let code = document.getElementById('code');
//prezzo biglietto
let price = document.getElementById('price');

// calcolo il prezzo base del biglietto dati i chilometri
let tax = 0.21;
let total = tax * distanceInput.value;
let promotion = "Biglietto Standard";

//numeri casuali per la carrozza del treno (tra 1 e 9)
let randCab = Math.floor(Math.random()*9) + 1;

//numeri casuali per il Codice CP
let randCP = Math.floor(Math.random()*99999) + 1;

//selezione il biglietto
let ticket = document.getElementById('ticket');




//creo evento ' al click calcolo prezzo'
submitBtn.addEventListener('click', calcPrice);

//creo evento 'click bottone stampo dati su biglietto'
submitBtn.addEventListener('click', saveData);

//stampo biglietto
submitBtn.addEventListener('click', stamp);

//elimino il biglietto
delBtn.addEventListener('click', del);



//creo funzione per calcolare il prezzo del biglietto
function calcPrice() {
    if (ageInput.value == 'minorenne') {
        promotion = "Biglietto Young";
        total = total * 0.8;
        total = total.toFixed(2);
    } else if (ageInput.value == 'over65'){
        promotion = "Biglietto Over";
        total = total * 0.6;
        total = total.toFixed(2);
    } else {
        total = total;
        total = total.toFixed(2);
    }
    
}

//creo funzione per stampare il biglietto coi dati
function saveData() {
    passenger.innerHTML = `${nameInput.value}`;
    promo.innerHTML = `${promotion}`;
    cab.innerHTML = `${randCab}`;
    code.innerHTML = `${randCP}`;
    price.innerHTML = `${total} &euro;`;
}

//funzione per stampare biglietto
function stamp() {
    ticket.className = "d_block";
}

//funzione per eliminare il biglietto 
function del() {
    ticket.className = "display";
}