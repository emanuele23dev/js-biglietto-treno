// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)

// - va applicato uno sconto del 20% per i minorenni

// - va applicato uno sconto del 40% per gli over 65.

// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). .tofixed(2)

// prima fase : preparazione
// creo la prima variabile dove chiedere all'utente il numero di km 
let numero_km;

// creo la seconda variabile dove chiedere all'utente l'età 
let eta;

// definizione prezzo biglietto in base ai km
let price_km = 0.21;

// seconda fase : raccogliamo i dati
// utilizzo un prompt per chiedere e salvare i km utente
numero_km = prompt("Ciao, quanti km devi percorrere?");
// utilizzo un prompt per chiedere e salvare età 
eta = prompt("Ciao, quanti anni hai?");
console.log(numero_km);
console.log(eta);