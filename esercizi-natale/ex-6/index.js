/*
  Hai un array con i colori delle palline del tuo albero di natale.
  Conta quante palline ci sono per ogni colore, restituisci un oggetto con il numero totale per ciascun tipo.

  Input:
  const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

  Output:
  {
    "rosso": 3,
    "blu": 2,
    "verde": 1,
    "giallo": 1
  }
*/

const palline = ["rosso", "blu", "rosso", "verde", "rosso", "giallo", "blu"];

function quantePalline(palline){
  let pallineRosse = 0;
  let pallineBlu = 0;
  let pallineVerdi = 0; 
  let pallineGialle = 0;
  for(let pallina of palline){
    if(pallina === 'rosso'){
      pallineRosse++
    } else if(pallina === 'blu'){
      pallineBlu++
    } else if(pallina === 'verde'){
      pallineVerdi++
    } else if(pallina === 'giallo'){
      pallineGialle++
    } else{
      console.log('Non ci sono palline rosse, blu, verdi o gialle!');
    }
  }
  return   {
    "rosso": pallineRosse,
    "blu": pallineBlu,
    "verde": pallineVerdi,
    "giallo": pallineGialle
  }
}

console.log(quantePalline(palline));
