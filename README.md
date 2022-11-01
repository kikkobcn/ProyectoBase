# Build Private Ethereum Networks

Este proyecto tiene la finalidad de crear y visualizar redes ethereum privadas mediante una sencilla interfaz gráfica.


## Getting Started

Estas instrucciones te darán una idea sobre la configuración y ejecución del proyecto en un entorno local.
Para saber cómo hacer el deploy, más abajo podrás verlo en el apartado "Deployment".


## Prerrequisitos

Requisitos para que el software pueda compilar y ejecutarse:

- [Descargar NodeJS](https://nodejs.org/es/download/)
- [Descargar Go Ethereum](https://geth.ethereum.org/downloads/)


## Instalación

Sigue uno a uno los siguientes comandos para la correcta instalación del proyecto:

Dentro de /frontend:
Instalación de yarn

    npm install yarn

Descarga e instalación de dependencias

    yarn

Dentro de /backend:
Descarga e instalación de dependencias

    npm install


## Ejecución de Tests

Dentro de /backend te encontrarás el fichero test.http donde puedes ejecutar distintas queries.

![Tests image](/frontend/src/assets/tests.png "Tests image")

Para poder ejecutarlas desde el propio VSCode os podéis bajar [esta extensión](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).


## Sample Tests

Explain what these tests test and why

    Give an example


## Style test

Checks if the best practices and the right coding style has been used.

    Give an example


## Deployment

Add additional notes to deploy this on a live system


## Built With

  - [Contributor Covenant](https://www.contributor-covenant.org/) - Used
    for the Code of Conduct
  - [Creative Commons](https://creativecommons.org/) - Used to choose
    the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Semantic Versioning](http://semver.org/) for versioning. For the versions
available, see the [tags on this
repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for
details

## Acknowledgments

  - Hat tip to anyone whose code is used
  - Inspiration
  - etc

## proyectos

### frontend (react)


### backend (nodejs)

En la parte del backend tenemos que hacer operaciones crear borrar directorios.

También se debe de lanzar procesos con parámetros y borrar procesos.

```javascript
const fs = require("fs")
var argv = require('yargs').argv;
const Web3 = require("Web3")
const {execSync} = require("child_process")

const NUMERO_NETWORK = parseInt(argv.network)
const NUMERO_NODO = parseInt(argv.nodo)
const NETWORK_DIR = `eth${NUMERO_NETWORK}`
const NETWORK_CHAINID = 333444 + NUMERO_NETWORK
const PASSWORD = "123456"

const BALANCE = "0x200000000000000000000000000000000000000000000000000000000000000"



const HTTP_PORT = 9545 + NUMERO_NODO + NUMERO_NETWORK * 20 
const AUTHRPC_PORT = 9553 + NUMERO_NODO + NUMERO_NETWORK * 20 
const NODO = `nodo${NUMERO_NODO}`
const PORT = 30404 + NUMERO_NODO + NUMERO_NETWORK * 20 
const IPCPATH = `\\\\.\\pipe\\${NETWORK_CHAINID}\\${NODO}.ipc`
const DIR_NODE = `${NETWORK_DIR}/${NODO}`   


if (!fs.existsSync(NETWORK_DIR))
   fs.mkdirSync(NETWORK_DIR)

if (fs.existsSync(`${NETWORK_DIR}/${NODO}`))
   fs.rmSync(`${NETWORK_DIR}/${NODO}`, {recursive:true,})

if (!fs.existsSync(`${NETWORK_DIR}/${NODO}`))
   fs.mkdirSync(`${NETWORK_DIR}/${NODO}`)



fs.writeFileSync(`${NETWORK_DIR}/${NODO}/pwd`,PASSWORD)
execSync(`geth  --datadir ${DIR_NODE}  account new --password ${DIR_NODE}/pwd`)

const lista = fs.readdirSync(`${DIR_NODE}/keystore`)
const CUENTA = JSON.parse(fs.readFileSync(`${DIR_NODE}/keystore/${lista[0]}`).toString()).address

const CUENTAS_ALLOC = [
   "704765a908962e25626f2bea8cdf96c84dedaa0b"
  // CUENTA
]
const timestamp = Math.round(((new Date()).getTime() / 1000)).toString(16)
// leemos la plantilla del genesis
let genesis = JSON.parse(fs.readFileSync('curso.json').toString())

// genesis.timestamp = `0x${timestamp}`
genesis.config.chainId = NETWORK_CHAINID 
genesis.extraData = `0x${'0'.repeat(64)}${CUENTA}${'0'.repeat(130)}`


genesis.alloc = CUENTAS_ALLOC.reduce((acc, item)  => {
     acc[item] = {balance: BALANCE}
     return acc
}, {})


fs.writeFileSync(`${NETWORK_DIR}/${NODO}/genesis.json`, JSON.stringify(genesis))

// INICIALIZAMOS EL NODO
const result = execSync(`geth --datadir ${DIR_NODE} init ${DIR_NODE}/genesis.json`)


const comando = `--networkid ${NETWORK_CHAINID}
--miner.threads 2
--syncmode full
--mine
--miner.threads 2
--datadir ${DIR_NODE}
--http
--graphql
--http.port ${HTTP_PORT}
--http.api admin,eth,miner,net,txpool,personal,web3
--allow-insecure-unlock
--unlock "0x${CUENTA}"
--password ${DIR_NODE}/pwd
--port ${PORT}
--authrpc.port ${AUTHRPC_PORT} 
--ipcpath "${IPCPATH}"`

const params = comando.replace("\n"," ").split(" ")


const params2 = [
   '--networkid',
   NETWORK_CHAINID,
   '--miner.threads',
   2,
   '--syncmode',
   'full',
   '--miner.gasprice',  0, 
   
   '--verbosity', 9,
   
   '--bootnodes',
   'enode://c64aa5554df5961673455c6499a57f480ea220639bc3090894fa567f34a4dcf21f956998299962f09521abd4b594f6b4d722dc380a74277c9fbe1647214307bd@127.0.0.1:0?discport=30301',
   '--datadir',   DIR_NODE,
   '--http', 
   '--http.corsdomain', '*',
   '--graphql',
   '--http.port', HTTP_PORT, 
   '--http.api', 'admin,eth,miner,net,txpool,personal,web3',
   '--allow-insecure-unlock',
   '--unlock',  CUENTA,
   '--password', `${DIR_NODE}/pwd`,
   '--port',   PORT,
   '--authrpc.port',   AUTHRPC_PORT,
   '--ipcpath',  `\\\\.\\pipe\\${NETWORK_CHAINID}-${NODO}.ipc`
 ]
 

const { spawn } = require('child_process'); 
const out = fs.openSync(`./${DIR_NODE}/out${NUMERO_NODO}.log`, 'a');
const err = fs.openSync(`./${DIR_NODE}/out${NUMERO_NODO}.log`, 'a');
const subproceso = spawn('geth', params2,{detached:true, stdio: ['ignore', out, err]});
fs.writeFileSync(`${DIR_NODE}/params.json`, JSON.stringify(subproceso,null,4))
subproceso.unref();

```

### borrar proceso en power shell
```powershell
param ($network)
Get-Process -Name geth | Select-Object -property id | Stop-Process -Force; Remove-Item .\eth$network -Recurse
```
