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
    // surnames.push(lastName);



if (found){
    console.log('Benvenuto (utente già registrato)' + lastName )
} else {
    surnames.push(lastName);
    console.log('Nuovo utente')
}

// FASE 4 Ordinamento array ordine alfabetico e stampa

surnames.sort();
console.log(surnames);

// FASE 5 Stampa lista e posizionamento in array

var position = (1 + surnames.indexOf(lastName));
console.log('La tua posizione è: ', position);
document.getElementById('result').innerHTML = 'La tua posizione è ' + position;





// Inserire elementi in lista 

// For

var items ='';

for (var i = 0; i <surnames.length; i++) {

    // Metodo1
    /* Manipolazione del DOM n volte quindi sconveniente*/

    // document.getElementById('list-surnames').innerHTML += '<li>' + surnames[i] + '</li>';

    // Metodo 2
    /* Manipolazione del DOM una sola volta */

    items += '<li>' + surnames[i] + '</li>';
    
    
}

document.getElementById('list-surnames').innerHTML = items;


// While

// var items = '';
// var count = 0
// while(count < surnames.length){
//     items += '<li>' + surnames[count] + '</li>';
//     count++;

// }

// document.getElementById('list-surnames').innerHTML = items;






