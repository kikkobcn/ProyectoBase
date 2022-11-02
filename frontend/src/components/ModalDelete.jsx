import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ModalDelete = () => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
        <Button className='bg-danger' onClick={() => setLgShow(true)}><i class="bi bi-trash"></i></Button>
            <Modal
                size="sm"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        ¿Borrar seguro?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Button className='bg-danger'>Borrar</Button>
                {/* <Button className='bg-secondary' onClick={() => setLgShow(false)}>Cancelar</Button> */}
                </Modal.Body>
            </Modal>
        </>
    )
}