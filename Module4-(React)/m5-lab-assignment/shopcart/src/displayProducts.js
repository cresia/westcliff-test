//Create add and subtract buttons and call the handles on the app.js (use setState())
//Create Modal

import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImge(product);
  }
  return (
    <div>
      {props.products.map(product => {
        return (
         
        )
      })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImge.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImge.image}
            width="350"
            alt={showImge.desc}
            className="mx-5"
          />
          <p><span className="text-dark">Ratings:</span> {showImge.rating}/5</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}
