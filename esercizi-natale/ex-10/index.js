/*
  Scrivi una funzione "renneStanche" che, dato un array con velocità delle renne, 
  restituisca true se almeno una renna ha una velocità inferiore a 10, altrimenti false.

  Input:
    const velocitaRenne = 
    [12,     1,    7,    10,    16,   5];

  Output:
    [false, true, true, false, false, true]
*/

const velocitaRenne = [12, 1, 7, 10, 16, 5];

const renneStanche = velocitaRenne.map(renna =>{
  if(renna < 10){
    return false
  } else { 
    return true
  }
})

console.log(renneStanche);
