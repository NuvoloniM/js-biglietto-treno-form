//Trasformo in variabili i dati ottenuti dall'input
let nameInput = document.getElementById('user_name');
let distanceInput = document.getElementById('distance');
let ageInput = document.getElementById('age');

// variabile per selezionare il bottone submit
let submitBtn = document.getElementById('button');

//creo evento 'click bottone submit'
submitBtn.addEventListener('click', saveData);



//creo funzione

function saveData() {
    console.log(distanceInput.value);
    console.log(nameInput.value);
    console.log(ageInput.value);
}