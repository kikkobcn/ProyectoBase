const Web3 = require("web3")
const web3 = new Web3("http://localhost:9566")

/*  En el getBalance vamos a poner la cuenta "TO" del sendTransaction del "enviarfunds.js"*/
web3.eth.getBalance("0xaE714f36bc53C2297102BaC966Dc453A5dE99cdB")
.then(console.log)