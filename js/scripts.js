/*Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const numeriGenerati = [];

const gridContainer = document.getElementById('grid-container');

const playButton = document.getElementById('play');

playButton.addEventListener('click',

    function () {

        console.log('Cliccato play');
        
        gridContainer.innerHTML = '';

        for (let i = 1; i <= 100; i++) {
        
            const newCell = createNewCell(i);
            gridContainer.append(newCell);
        
        }

    }

);

function createNewCell(num) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
    
        function () {

            console.log(num);
            console.log(this.innerText);

            this.classList.add('clicked');

        }
    
    );

    cell.innerHTML = num;

    return cell;

}