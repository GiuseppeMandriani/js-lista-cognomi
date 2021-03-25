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

// Fase 2  Richiesta Dato all'utente 

var lastName = prompt('Inserire cognome');

while (lastName === null || lastName.trim() === ''){
    lastName = prompt('Prego inserire un valore valido')
}

lastName = lastName.toLowerCase().trim();

console.log(lastName);

// Fase 3 Inserimento cognome nell'array
surnames.push(lastName);

// FASE 4 Ordinamento array ordine alfabetico e stampa

surnamesOrdinata = surnames.slice();
surnamesOrdinata.sort();

// Posizionamento

var posUsers = surnamesOrdinata.indexOf(lastName) + 1;



// FASE 5 Stampa lista 

console.log('Lista originale ', surnames);
console.log('Lista odinata ', surnamesOrdinata);
console.log('Posizione: ', posUsers);





// Inserire elementi in lista  e stampa su schermo

// For

var items ='';

for (var i = 0; i <surnamesOrdinata.length; i++) {

    // Metodo1
    /* Manipolazione del DOM n volte quindi sconveniente*/

    // document.getElementById('list-surnames').innerHTML += '<li>' + surnames[i] + '</li>';

    // Metodo 2
    /* Manipolazione del DOM una sola volta */

    items += '<li>' + surnamesOrdinata[i] + '</li>';
    
    
}

document.getElementById('list-surnames').innerHTML = items;


document.getElementById('result').innerHTML = 'La tua posizione è la numero: ' + posUsers;






