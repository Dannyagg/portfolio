import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ReactPlayer from 'react-player'

export default function DemoButton() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Watch Demo
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                fullscreen='lg-down'
                keyboard={true}
                restoreFocus={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Weather Application Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body

                    style={{
                        backgroundColor: 'blur',
                        display: 'flex',
                        justifyContent: 'center',
                    }}

                >
                    <ReactPlayer 
                    url='https://youtu.be/M9i57csh6Es'
                        controls={true}
                        playings={false}
                        volume={1}
                        muted={true}
                        pip={true}
                        stopOnUnmount={false}
                    />

                </Modal.Body>
                {/* <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                      Save Changes
                  </Button>
              </Modal.Footer> */}
            </Modal>
        </>
    )
}
