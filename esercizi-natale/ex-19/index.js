/*
  Sfruttano l'api di gerry scotti, stampa in console sue 5 frasi.
  Endpoint API: https://gerry-quotes.fly.dev/quotes/random

  Puoi utilizzare sia fetch che axios per la chiamata AJAX.
*/

const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const endpoint = 'https://gerry-quotes.fly.dev/quotes/random'

for(let i = 0 ; i < 5 ; i++){
  
  axios.get(endpoint)
    .then(res=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err);
    })
}
