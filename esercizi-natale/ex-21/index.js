/*
  Base.
  Mostra in pagina un elenco di desideri presi da un array. 
  Output: (vedi esempio-base.png)
  
  Bonus.
  Aggiungi un pulsante accanto a ogni desiderio per eliminarlo dalla lista.
  Output: (vedi esempio-bonus.png)
*/
const lista = document.getElementById('desideri')
const desideri = ["Un trenino", "Un Cicibubu portatile", "Un bonifico", "Un cane"];

function stampaDesideri(array){
  lista.innerHTML=''
  array.forEach(element=>{
    const listElement = document.createElement('li');
    listElement.textContent = element;
    lista.appendChild(listElement)
  })
}

stampaDesideri(desideri)