import { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useWallet, UseWalletProvider } from 'use-wallet'
const { ethereum } = window

//Componente FORM_FAUCET
export function Form_Faucet() {
  const [cuenta, setCuenta] = useState(null);
  const [balance, setBalance] = useState(0);

  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  // const [accounts, setAccounts] = useState(undefined);
  // const [contract, setCcontract] = useState(null)

  function getBalance(account) {
    fetch('http://localhost:3333/faucet/balance/' + account).then((response) => {
      return response.json()
    }).then((balance) => {
      setBalance(balance.balance)
    })
  }
  function faucet() {
    console.log("enviar", cuenta)
  }

  useEffect(() => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(cuentas => {
      setCuenta(cuentas[0]);
      getBalance(cuentas[0])
      ethereum.on("accountsChanged", (cuentas) => {
        setCuenta(cuentas[0]);
        getBalance(cuentas[0])
      })
    })

  }, [])

  const cuenta1 = 0

  const onFormSubmit = (e) => {
    console.log({ from, to })
    e.preventDefault();


  }

  return (

    <div className="container text-light">
      <div className='network-container bg-dark mt-2 p-3'>
        <div className="faucet">
          <h2>FAUCET</h2>
          <h4>Cuenta de destino</h4>
        </div>
      </div>
      <div className='network-container bg-dark mt-2 p-3'>
        <div className="cuentaM">{cuenta} - Balance {balance}<br></br>
          <button onClick={() => faucet()} className="mt-3 btn btn-primary">Enviar 10 eth</button>
        </div>
      </div>
      <div className='network-container bg-dark mt-2 p-3'>
        < div className="transaccion">
          <h1>TRANSACCION</h1>
          <Form onSubmit={onFormSubmit}>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="cuentaOrigen">
                Cuenta de Origen
              </Form.Label>
              <Form.Control id="cuentaOrigen" value={from} />

              <Form.Label htmlFor="cuentadestino">

              </Form.Label>
              <Form.Control id="cuentaDestino" value={to} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>

          </Form>
        </div>
      </div>
    </div>







  )
}

export default Form_Faucet;


