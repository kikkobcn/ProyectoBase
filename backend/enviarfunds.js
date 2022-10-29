const Web3 = require("web3")
const web3 = new Web3("http://localhost:9566")

/*  1. Conectar  Metamask con el pureto del nodo 1  (el que tiene fondo,el pre-founded)    
    2. Ir al paramsNodo del nodo 1
    3. coger la 1ª direccion del address y ponerla en la propiedad "From" en al sendTransaction
    4. La direccion de la propiedad "TO" del sendTransaction es otra cuenta del Metamask de la misma cadena
    del nodo 1
*/
async function txs() {
    const r = await web3.eth.sendTransaction({
        from: '0x183ba55aa02d20b081b7e67f42c649fabf567130',
        to: '0xaE714f36bc53C2297102BaC966Dc453A5dE99cdB',
        value: '1000000000000000000'
    }) 
    console.log(r.blockHash)
    return r;
}

(async () => {
    
    for (let index = 0; index < 10; index++) {
        const r = await txs()
        
    }
    
    
})()