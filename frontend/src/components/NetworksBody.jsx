import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { ModalInfo } from './ModalInfo';
import { ModalDelete } from './ModalDelete';


export const NetworksBody = () => {
    const params = useParams()
    //let rednum = params.numeroRed.slice(3,red.length)
    const { data, isLoading,error } = useQuery(["redes"], async () => {
        return await fetch("http://localhost:3333/network").then(res => res.json());
    });

if (isLoading) {
return <>Cargando......</>
}
if (error) {
return <>{JSON.stringify(error)}</>
}
return (
    <div className="container text-light ">
            <div className='text-end'>
                <p><button type="button" className="btn btn-light btn-sm m-2">Add Network</button></p>
            </div>
            <div className='network-container bg-dark p-3'>
            <Table borderless className='text-left' id='networks-table'>
                <thead>
                    <tr>
                        <th className='col-md-3'>Cod. Red</th>
                        <th className='col-md-3'>ChainID</th>
                        <th className='col-md-3'>Cuenta</th>
                        <th className='col-md-1'>Info</th>
                        <th className='col-md-1'>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => <tr key={index}>
                            <td >{item.numero.slice(3, item.numero.length)}</td>
                            <td>{item.chainId}</td>
                            <td>{item.cuentas.map((cuenta, index2) => <div>{cuenta}</div>)}</td>
                            <td><ModalInfo nuRed={item.numero.slice(3, item.numero.length)} idChain={item.chainId} /></td>
                            <td><ModalDelete></ModalDelete></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    </div>
);
}


