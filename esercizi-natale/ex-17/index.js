/*
  Quanto manca a natale? 
  Hai una data. Scrivi una funzione "countdownNatale" che restituisca il numero di giorni che mancano a natale.

  Input:
    const data = "2024-12-18";
  
  Output: 
    7
*/

const data = "2024-12-18";

function countdownNatale(data) {
  const natale = new Date("2024-12-25")
  const differenza = natale - data;
  const unGiorno = 1000 * 60 * 60 * 24
  const giorniMancanti = Math.ceil(differenza / unGiorno);
  return giorniMancanti;
}

const date = new Date("2024-12-18");
console.log(`Mancano ${countdownNatale(data)} giorni a Natale.`);
