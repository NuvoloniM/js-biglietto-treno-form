//Trasformo in variabili i dati ottenuti dall'input
let nameInput = document.getElementById('user_name');
let distanceInput = document.getElementById('distance');
let ageInput = document.getElementById('age');

// variabile per selezionare il bottone submit
let submitBtn = document.getElementById('button');

//seleziono il div del biglietto
let biglietto = document.getElementById('biglietto');

// calcolo il prezzo base del biglietto dati i chilometri
let tax = 0.21;
let total = tax * distanceInput.value;


//creo evento ' al click calcolo prezzo'
submitBtn.addEventListener('click', calcPrice);

//creo evento 'click bottone submit'
submitBtn.addEventListener('click', saveData);



//creo funzione per stampare il biglietto coi dati
function saveData() {
   biglietto.innerHTML += `<p> ${nameInput.value} </p> <p> ${distanceInput.value} </p>`;
}

//creo funzione per calcolare il prezzo del biglietto
function calcPrice() {
    if (ageInput.value == 'minorenne') {
        total = total * 0.8;
        total = total.toFixed(2);
        biglietto.innerHTML += `il prezzo del tuo biglietto è ${total} &euro;`;
    } else if (ageInput.value == 'over65'){
        total = total * 0.6;
        total = total.toFixed(2);
        biglietto.innerHTML += `il prezzo del tuo biglietto è ${total} &euro;`;
    } else {
        total = total;
        total = total.toFixed(2);
        biglietto.innerHTML += `il prezzo del tuo biglietto è ${total} &euro;`;
    }
    
}
