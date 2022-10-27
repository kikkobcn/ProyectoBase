import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NetworksBody = () => {

    return (
        <div className="container text-light">
            <div className='network-container bg-dark  m-3'>
            <div className='text-end'>
                <p>
                    <button type="button" class="btn btn-light btn-sm m-2">Add Network</button>
                </p>
            </div>   
            <Table borderless className='text-center' id='networks-table'>
                <thead>
                    <tr>
                        <th className='col-md-3'>ChainID</th>
                        <th className='col-md-3'>Nodes Number</th>
                        <th className='col-md-3'>IP:Port</th>
                        <th className='col-md-3'>Network Info</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>98777</td>
                            <td>1</td>
                            <td>http://localhost:9545</td>
                            <td>
                                <button className="btn btn-light btn-sm">
                                    <i class="bi bi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>98779</td>
                            <td>3</td>
                            <td>http://localhost:9546</td>
                            <td>
                                <button className="btn btn-light btn-sm">
                                    <i class="bi bi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>98784</td>
                            <td>2</td>
                            <td>http://localhost:9547</td>
                            <td>
                                <button className="btn btn-light btn-sm">
                                    <i class="bi bi-info-circle"></i>
                                </button>
                            </td>
                        </tr>
                </tbody>
            </Table>
            </div>  
        </div>
    );
}
