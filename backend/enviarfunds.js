const Web3 = require("web3")
const web3 = new Web3("http://localhost:9566")
//Leemos el fichero .env para acceder a variables por process.env.<nombre variable>
require("dotenv").config()

/*  1. Conectar  Metamask con el pureto del nodo 1  (el que tiene fondo,el pre-founded)    

    2. Ir al paramsNodo del nodo 1*/
router.get("networkweb/1/1", async (req, res) => {
    // const NUMERO_NETWORK = parseInt(req.params.network)
    // const NETWORK_DIR = `ETH/eth1`
    const nodo = fs.readdirSync(`ETH/eth1`, { withFileTypes: true }).filter(i => !i.isFile())
    console.log(nodo);
    const output = nodo.map(i => {
        const paramsNodo = JSON.parse(fs.readFileSync(`ETH/eth1/nodo1/paramsNodo.json`))
        return {
            cuentaFrom: paramsNodo.nodo.address[0]
        }
    })

    res.json(output)
})
    /*
    3. coger la 1ª direccion del address y ponerla en la propiedad "From" en al sendTransaction
    4. La direccion de la propiedad "TO" del sendTransaction es otra cuenta del Metamask de la misma cadena del nodo 1*/
    web3.eth.requestAccounts().then(console.log);

//Ruta envio transaccion
router.get("/enviar/:cuenta", async (req, res) => {
    //Creacion TX   
    const tsx = await web3.eth.accounts.signTransaction({
        from: cuentaFrom,   //cuenta recuperada del paramsNodo nodo 1
        to: req.params.cuenta,
        // value: ethers.utils.parseEther("10").toHexString(),
        value: 10E18,
        gas: 20000000
    }, process.env.PRIVATE_KEY)

    //Firma la tx
    const txSended = await web3.eth.sendSignedTransaction(
        tsx.rawTransaction
    )

    //Actualizar balance
    const balance = await web3.eth.getBalance(req.params.cuenta)
    res.send({ balance}) 

});

    

        
  

// (async () => {
    
//     for (let index = 0; index < 10; index++) {
//         const r = await txs()
        
//     }
    
    
// })()