const express = require('express');
const server = express();

server.all(`/`, (req, res)=>{
  res.send(`on`)
})

function keepAlive(){
  server.listen(3000, ()=> {console.log(`Ready`)

  });
}
module.exports = keepAlive;