/*
esercizio di oggi, calcolo del prezzo del biglietto del treno
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/



//pseudocodice
//- 

//S

//

//

// Quanti Km è lontana la tua destinazione? 
let user_km = Number(prompt('Quanti Km è lontana la tua destinazione?'));

// scrivi la tua età
let user_eta = Number(prompt('Scrivi qui la tua età'));

// calcolare 0.21€/km
let prezzoPerKm = 0.21;
let prezzoTotale = user_km * prezzoPerKm;

// verificare che sia < 18 - calcolare -20%
if (user_eta < 18) {
    prezzoTotale *= 0.8;
// verificare che sia > 65 - calcolare -40%
} else if (user_eta >= 65) {
    prezzoTotale *= 0.6;
}

prezzoTotale = prezzoTotale.toFixed(2);

// Stampare il prezzo finale
document.getElementById('totale').innerHTML = 'Il prezzo del tuo biglietto è di €' + prezzoTotale;


