/*
  Il nostro albero di natale deve avere una quantità di addobbi bilanciata. 
  Devono esserci tante stelle quante palline.
  Dato un array con più "pallina" e "stella", scrivi una funzione "bilanciaAlbero"
  che ritorni un array con lo stesso numero di "pallina" e "stella".
  La funzione non puà rimuovere elementi, ma solo aggiungerne.

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"] 
    (aggiunte due "stella" per bilanciare il numero di addobbi)

  -----------

  Input:
    const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella", "stella", "stella"];

  Output:
    ["pallina", "pallina", "pallina", "stella", "stella", "stella"]; 
    (In questo caso restituisce l'array immutato, perchè ci sono lo stesso numero di "pallina" e "stella")
*/

const addobbiSuAlbero = ["pallina", "pallina", "pallina", "stella"];

function bilanciaAlbero(array){
  let pallinaCounter = 0
  let stellaCounter = 0
  array.forEach(element => {
    if(element === 'pallina'){
      pallinaCounter++
    } else if(element === 'stella'){
      stellaCounter++
    }
  })
  const differenza = Math.abs(pallinaCounter - stellaCounter)
    if(pallinaCounter > stellaCounter){
      for(let i = 0 ; i < differenza ; i++){
        array.push('stella')
      }
    } else if(pallinaCounter < stellaCounter){
      for(let i = 0 ; i < differenza ; i++){
      array.push('pallina')
      }
    }
  return array
}

console.log(bilanciaAlbero(addobbiSuAlbero));
