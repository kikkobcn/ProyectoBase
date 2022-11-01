import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


export const NetworksBody = () => {
    const params = useParams()
    let rednum = params.numeroRed.slice(3,red.length)
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
    <div className="container text-light">
            <div className='text-end'>
                <p>
                    <button type="button" className="btn btn-light btn-sm m-2">Add Network</button>
                </p>
                </div>   
            <Table borderless className='text-left' id='networks-table'>
                <thead>
                    <tr>
                        <th className='col-md-3'>Cod. Red</th>
                        <th className='col-md-3'>ChainID</th>
                        <th className='col-md-3'>Cuenta</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        data.map((item,index) => <tr key={index}>
                            <td >{item.numero}</td>
                            <td>{item.chainId}</td>
                            <td>
                                {item.cuentas.map((cuenta, index2) => <div>
                                {cuenta}</div>)}
                            </td>
                            <td>
                                <Link to={`/network/${item.numeroRed}`}>
                                    <button className="btn btn-light btn-sm">
                                        <i className="bi bi-info-circle" ></i>
                                    </button>
                                </Link>
                            </td>
                        </tr>)}
                        
                </tbody>
            </Table>
        </div>
    );
}
/*
        function nred(){
            return numRed={item.numero}.substring(2,1)
        }
; //  
*/


