import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useQuery } from 'react-query';



export const ModalInfo = (props) => {
    const [lgShow, setLgShow] = useState(false);

    if (lgShow == true) {
        const { data, isLoading, error } = useQuery(["nodos"], async () => {
            return await fetch(`http://localhost:3333/${[props.nuRed]}`).then(res => res.json());
        });

        if (isLoading) {
            return <>Cargando......</>
        }
        if (error) {
            return <>{JSON.stringify(error)}</>
        }
console.log(data)
        }


    return (
        <>
        <Button onClick={() => setLgShow(true)}><i className="bi bi-info-circle"></i></Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h2>Detalle de la Red</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Text className="text-muted">
                                    <Table borderless className='text-left' id='nodes-table'>
                                        <thead>
                                            <tr>
                                                <th className='col-md-3'>Nº Nodo</th>
                                                <th className='col-md-3'>Nº Red</th>
                                                <th className='col-md-3'>ChainID</th>
                                                <th className='col-md-1'>Puerto</th>
                                                <th className='col-md-1'>Puerto_http</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                // datosInfoRed.map((item, index) => <tr key={index}>
                                                data.map((item, index) => <tr key={index}>
                                                    <td >{item.numeroNodo}</td>
                                                    <td>{item.numeroRed}</td>
                                                    <td>{item.chainId}</td>
                                                    <td>{item.puerto}</td>
                                                    <td>{item.puertoHttp}</td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </Table>
                                </Form.Text>
                            </Form.Group>
                        </Form>                              
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )

}
export default ModalInfo