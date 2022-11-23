import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';
import data from '../Data';



const AddMovie = () => {

    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        id: uuidv4(),
        title: '',
        poster: '',
        description: '',
        rating: 0,

    });

    const handleClose = () => setShow(false);
    const Add = () => [...data, newMovie];
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                ADD MOVIE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD YOUR MOVIE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder='Type the title' />
                    <input placeholder='Type the description' />
                    <input placeholder='Type the rating' />
                    <input placeholder='Type the URL of the poster' />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Add} >
                        Save movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )




}

export default AddMovie;