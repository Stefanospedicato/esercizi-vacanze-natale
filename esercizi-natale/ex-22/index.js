/*
  Crea un form che permetta all’utente di inserire un messaggio di auguri. 
  Ogni volta che preme “Aggiungi Augurio”, il messaggio viene aggiunto a una lista visualizzata nel DOM.
  
  Output: (vedi esempio.png)
*/

const listaAuguri = document.getElementById('listaAuguri')
const button = document.getElementById('aggiungiAugurio')
const message = document.getElementById('messaggioAuguri')

button.addEventListener('click',()=>{
  if(message.value){
    listElement = document.createElement('li');
    listElement.textContent = message.value;
    listaAuguri.appendChild(listElement)
    message.value=''
  }
})