/**
 * 1. Creazione array
 * 2 Richiesta cognome all'utente
    3. inseriscilo in un array con altri cognomi: ‘bianchi’, ‘neri’, ‘rossi’, ‘verdi’, ‘gialli’
    4. stampa la lista ordinata alfabeticamente
    5. scrivi anche la posizione "umana", 1 oppure 2 oppure 3 oppure ecc... (non 0 oppure 1 oppure 2 oppure ecc.. tipici degli array), del nuovo utente inserito sopra all'interno dell'array, dopo l'ordinamento alfabetico
 */


// Fase 1 Creazione array 

var surnames = [
    'mandriani',
    'preziosa',
    'colorado',
    'pinco',
    'pallino',
    'quadro',
    'zorro'];

// Fase  Richiesta Dato all'utente 

var lastName = prompt('Inserire cognome').toLowerCase();
console.log(lastName);

// Fase 3 Verifica presenza elemento ed eventuale inserimento in array

var found = surnames.includes(lastName);


if (found){
    console.log('Benvenuto ' + lastName )
} else {
    surnames.push(lastName);
}

// FASE 4 Ordinamento array ordine alfabetico e stampa

surnames.sort();
console.log(surnames);

// FASE 5 Stampa lista e posizionamento in array

surnames.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("prova").innerHTML += index+1 + ":" + item + "<br>"; 
}



