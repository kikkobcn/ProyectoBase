
Terminal 1: puppeth Seguimos los pasos para crear el genesis.json: - Nombre de la network (genesis) - 2 Configurar genesis nueva - 1 Crear nueva genesis desde cero - 2 Clique - PoA - 0 Cuantos segundos/bloque - Accounts allowed to seal (aqui cambiamos de terminal y generamos un nodo con los siguientes datos)

Generar el Nodo ./geth --datadir nodo1 account new --password ./pwd.txt (para que busque el pwd.txt debemos crearlo, ya está creado)

Se crea una carpeta llamada nodo1 con el fichero JSON dentro, donde está el address que nos pide Puppeth para seal. Volvemos a la terminal Puppeth

Pegamos una a una las address al terminal, ya nos pone el 0x (enter para confirmar las tres, luego enter sin añadir nada para seguir)

Accounts pre-funded

Aqui metemos una cuenta de Metamask, yo use la red de pruebas Goerli (0xDf8D4a07A78B2e71bCDC93b2E424274B69491136)
Prefondear las direcciones con 1 WEI (yes)
Chain ID: 333444
2 Manage existing genesis

2 Export new genesis

Enter Ya hemos creado el genesis.json y le hemos dicho cual es el address de cada nodo.

Creamos el bootnode para que los nodos se busquen entre ellos: ./bootnode --genkey=boot.key ./bootnode --verbosity=9 --nodekey=boot.key

Nuestro enode: enode://da38bbca1ac511a3a9ed54656eb2efb888364c69edd6b858f064a85626427d530ddd7cdd7ffc8efee09805d683a46c3aa2eaa1c71a59003e14dac77f850797c8@127.0.0.1:0?discport=30301

Corremos el genesis.json con el comando

./geth --datadir .puppeth init ./genesis.json

Abrimos un terminal para cada nodo, todos corren con la misma base pero con parametros diferentes

Nodo 1 a) ./geth --datadir nodo1 init ./genesis.json
b) ./geth --datadir nodo1 --http --http.port 8575 --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "03ae76be116a60a1ed9ee5604e17c22d2b91d560" --password pwd.txt --port 30010 --mine --bootnodes enode://da38bbca1ac511a3a9ed54656eb2efb888364c69edd6b858f064a85626427d530ddd7cdd7ffc8efee09805d683a46c3aa2eaa1c71a59003e14dac77f850797c8@127.0.0.1:0?discport=30301

Nodo 2 a) ./geth --datadir nodo2 init ./genesis.json
b) ./geth --datadir nodo2 --http --authrpc.port 8576 --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "2fc2605958d2378ac66c142f1c0b5148d0995a7d" --password pwd.txt --port 30011 --mine --bootnodes enode://da38bbca1ac511a3a9ed54656eb2efb888364c69edd6b858f064a85626427d530ddd7cdd7ffc8efee09805d683a46c3aa2eaa1c71a59003e14dac77f850797c8@127.0.0.1:0?discport=30301 --ipcpath "\.\pipe\geth2.ipc"

Al final debemos tener:

3 nodos con un JSON dentro
Un directorio .puppeth con el genesis.json dentro
El genesis.json también fuera, pues lo hemos exportado