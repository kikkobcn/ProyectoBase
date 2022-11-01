import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const ModalInfo = () => {
    const [lgShow, setLgShow] = useState(false);
    const miFuncion = (mostrar, numeroRed) =>{

    }
    return (
        <>
        <Button onClick={() => setLgShow(true)}><i class="bi bi-info-circle"></i></Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    )

}