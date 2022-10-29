import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from 'react-query'

const listaNodosLocal = () => {
    return
    [
        {
            "numeroRed": 1,
            "chainId": 98766,
            "numeroNodo": 1,
            "puerto": 9566
        },
        {
            "numeroRed": 1,
            "chainId": 98766,
            "numeroNodo": 2,
            "puerto": 9567
        },
        {
            "numeroRed": 1,
            "chainId": 98766,
            "numeroNodo": 3,
            "puerto": 9568
        },
        {
            "numeroRed": 1,
            "chainId": 99012,
            "numeroNodo": 4,
            "puerto": 9569
        }
    ]
}

//Enlazamos con el backend con esta funcion
const listaNodos = async () => {
    const response = await fetch("http://localhost:3333/network/1")
    const datos = await response.json();
    return datos;
}

export const NodesBody = () => {
    const { data, isLoading } = useQuery(["nodos"], listaNodos) 
    if(isLoading)return <p>Cargando</p>

    return (
        <div className="container text-light">
            <div className='text-end'>
                <p>
                    <button type="button" className="btn btn-light btn-sm m-2">Add Network</button>
                </p>
            </div>   
            <Table borderless className='text-left' id='networks-table'>
                <thead>
                    <tr>
                        <th className='col-md-3'>Chain Nº</th>
                        <th className='col-md-3'>Chain ID</th>
                        <th className='col-md-3'>Nodes Number</th>
                        <th className='col-md-3'>IP:Port</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        data.map((item,index) => <tr key={index}>
                            <td>{item.numeroRed}</td>
                            <td>{item.chainId}</td>
                            <td>{item.numeroNodo}</td>
                            <td>{item.puerto}</td>
                            <td>
                                <button className="btn btn-light btn-sm" >
                                    <i className="bi bi-info-circle" ></i>
                                </button>
                            </td>
                        </tr>)
                        }
                </tbody>
            </Table>
        </div>
    );
}