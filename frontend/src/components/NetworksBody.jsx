import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from 'react-query'

//Funcion de prueba local
// const listaNetworksLocal = () => {
//     return [
//         {chainId:111222, cuenta:"0x......................", numero:1},
//         {chainId:222333, cuenta:"0x......................", numero:2},
//         {chainId:444555, cuenta:"0x......................", numero:3},
//         {chainId:666777, cuenta:"0x......................", numero:4}
//     ]
// }

//Enlazamos con el backend con esta funcion
const listaNetworks = async () => {
    const response = await fetch("http://localhost:3333/network")
    const datos = await response.json();
    return datos;
}

export const NetworksBody = () => {
    const { data, isLoading } = useQuery(["redes"], listaNetworks) 
    if(isLoading)return <p>Cargando</p>
    return (
        <div className="container text-light">
            {/* <div className='network-container bg-dark  m-3'> */}
            <div className='text-end'>
                <p>
                    <button type="button" className="btn btn-light btn-sm m-2">Add Network</button>
                </p>
            </div>   
            <Table borderless className='text-left' id='networks-table'>
                <thead>
                    <tr>
                        <th className='col-md-3'>Numero</th>
                        <th className='col-md-3'>ChainID</th>
                        <th className='col-md-3'>Cuenta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index) => <tr key={index}>
                            <td>{item.numero}</td>
                            <td>{item.chainId}</td>
                            <td>{item.cuentas.map((cuenta, index2)=><div>{cuenta}</div>)}</td>
                            <td>
                                <button className="btn btn-light btn-sm" >
                                {/* <button className="btn btn-light btn-sm" onClick={listaNodos(item.numero)}> */}
                                    <i className="bi bi-info-circle" ></i>
                                </button>
                            </td>
                        </tr>)
                        }
                        
                </tbody>
            </Table>
            {/* </div>   */}
        </div>
    );
}

