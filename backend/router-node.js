const express = require("express")
const router = express.Router()
const fs = require("fs")
module.exports =  router

const { exec, execSync, spawn, spawnSync } = require("child_process");
const { send } = require("process");

const PASSWORD = "123456";
const BALANCE ="0x200000000000000000000000000000000000000000000000000000000000000";

function generateParameter(network, node) {
    const NUMERO_NETWORK = parseInt(network);
    const NUMERO_NODO = parseInt(node);
    const NODO = `nodo${NUMERO_NODO}`;
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`;
    +NUMERO_NETWORK;
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`;
    //cambiamos el pipe para que todos los nodos puedan ser inicializados
    const PORT = 30404 + NUMERO_NODO + NUMERO_NETWORK * 20;
    const AUTHRPC_PORT = 9553 + NUMERO_NODO + NUMERO_NETWORK * 20;
  
    return {
      NUMERO_NETWORK,
      NUMERO_NODO,
      NODO,
      NETWORK_DIR,
      DIR_NODE,
      PORT,
      AUTHRPC_PORT,
    };
  }

router.post(  "/add", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.body.network)
    const NUMERO_NODO = parseInt(req.body.node);
    const parametros = generateParameter(NUMERO_NETWORK, NUMERO_NODO);

    const {
        NETWORK_DIR,
        DIR_NODE,
        NETWORK_CHAINID,
        AUTHRPC_PORT,
        HTTP_PORT,
        PORT,
        IPCPATH,
    } = parametros;

    deleteIfExists(DIR_NODE);
    createIfNotExists(DIR_NODE);

    const CUENTA = createAccount(DIR_NODE);
    const CUENTAS_ALLOC = [CUENTA];

    const comando = `geth --datadir ${DIR_NODE} init ${NETWORK_DIR}/genesis.json`;

    const result = exec(comando, (error, stdout, stderr) => {
        console.log("ejecutado");
        if (error) {
        res.send({ error });
        return;
        }
        const resultado = launchNode(
        NUMERO_NETWORK,
        NUMERO_NODO,
        DIR_NODE,
        NETWORK_DIR,
        IPCPATH,
        NETWORK_CHAINID,
        HTTP_PORT,
        CUENTA,
        PORT,
        AUTHRPC_PORT,
        BALANCE,
        CUENTAS_ALLOC
        );
        res.send(resultado);
    });
    //res.status(500).send("Not implemented ")
})

router.post("/delete", (req, res) => {
    const NUMERO_NETWORK = parseInt(req.body.network)
    const NUMERO_NODO = parseInt(req.body.node)
    const NODO = `nodo${NUMERO_NODO}`
    const NETWORK_DIR = `ETH/eth${NUMERO_NETWORK}`
    const DIR_NODE = `${NETWORK_DIR}/${NODO}`

    const pid = JSON.parse(fs.readFileSync(`${DIR_NODE}/paramsNodo.json`)).pid
    try {
        process.kill(pid)    
    } catch (error) {
        
    }
    if (fs.existsSync(`${DIR_NODE}`))
        fs.rmSync(`${DIR_NODE}`, { recursive: true, })

    res.send({pid})
})

//---------------------------------------------------------------------------------------------------
    function createAccount(DIR_NODE) {
        fs.writeFileSync(`${DIR_NODE}/pwd`, PASSWORD)
        execSync(`geth  --datadir ${DIR_NODE}  account new --password ${DIR_NODE}/pwd`)

        // Cogemos el address que acabamos de crear 
        const lista = fs.readdirSync(`${DIR_NODE}/keystore`)
        const CUENTA = JSON.parse(fs.readFileSync(`${DIR_NODE}/keystore/${lista[0]}`).toString()).address
        return CUENTA
    }
    function launchNode(NUMERO_NETWORK, NUMERO_NODO, DIR_NODE, NETWORK_DIR,
        IPCPATH, NETWORK_CHAINID, HTTP_PORT, CUENTA, PORT,
        AUTHRPC_PORT, BALANCE,
        CUENTAS_ALLOC) {
    
            //Variables para lanzar el procesos en detached desde el Web Server
        const out2 = fs.openSync(`./${DIR_NODE}/outNodo.log`, 'a');
        const err2 = fs.openSync(`./${DIR_NODE}/outNodo.log`, 'a');
        const params = [
            "--networkid", NETWORK_CHAINID,
            '--mine',
            '--syncmode', 'full',
            '--datadir', DIR_NODE,
            '--http', '--http.corsdomain', '*', '--graphql',
            '--http.port', HTTP_PORT, '--http.api', 'clique,admin,eth,miner,net,txpool,personal,web3',
            '--allow-insecure-unlock', '--unlock', CUENTA, '--password', `${DIR_NODE}/pwd`,
            '--port', PORT,
            '--authrpc.port', AUTHRPC_PORT,
            '--ipcpath', IPCPATH,
            '--nodiscover',
            '--trace', `${DIR_NODE}/trace.txt`
        ]
            //Definicion objeto nodo para guardar todos sus datos
        const nodo = {
            network: NUMERO_NETWORK,
            nodo: NUMERO_NODO,
            network_dir: NETWORK_DIR,
            dir_node: DIR_NODE,
            port: PORT,
            http_port: HTTP_PORT,
            ipcpath: IPCPATH,
            address: CUENTAS_ALLOC,
            chainId: NETWORK_CHAINID,
            authRpcPort: AUTHRPC_PORT,
            prefund: BALANCE
    
        }
            //Spawn(ejecucion) del comando geth para el lanzamiento del nodo
        const subproceso2 = spawn('geth', params, { detached: true, stdio: ['ignore', out2, err2] });
        fs.writeFileSync(`${DIR_NODE}/paramsNodo.json`, JSON.stringify({ nodo, subproceso: subproceso2 }, null, 4))
        subproceso2.unref();
        return { nodo, subproceso: subproceso2 }
    }
    //---------------------------------------------------------------------------------------------------
    
    function createIfNotExists(path) {
        if (!fs.existsSync(path))
            fs.mkdirSync(path)
    }
    function deleteIfExists(path) {
        if (fs.existsSync(path))
            fs.rmdirSync(path, { recursive: true, })
    }
    
    
