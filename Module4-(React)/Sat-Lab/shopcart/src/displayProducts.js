import { ListGroup, ListGroupItem } from 'reactstrap';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './App.css';

export default function Shopcontent(props){
  const [show, setShow] = useState(false);
  const [showImage, setShowImage] = useState({});

  const handleClose = () => setShow (false);
  const handleShow = (item) => {
      setShow(true);
      setShowImage(item);
  }

  return (
    <ListGroup>
      {props.shopitems.map(shopitem => {
        return (
          <ListGroupItem key={shopitem.id} className="GroupItem">
            <h2>{shopitem.desc}</h2>
            <div className="itemcontent">
              <img src={shopitem.image} alt="Shopping" height={150} width={150} onClick={() => handleShow(shopitem)}/>
              <button className="updateButton" onClick={() => props.addItem(shopitem)}>
                <FontAwesomeIcon icon={faPlusCircle} height={50} width={50}/>
              </button>
              <button className="updateButton" onClick={() => props.removeItem(shopitem)}>
                <FontAwesomeIcon icon={faMinusCircle}/>
              </button>
              <div className="quantityDisplay">
                <span>{shopitem.value}</span>
                <p className="quantity">Quantity</p>
              </div>
            </div>
          </ListGroupItem>
        )
      })}
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>{showImage.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={showImage.image} width="350" alt={showImage.desc} className="mx-5"/>
              <p><span className="text-dark">Ratings:</span> {showImage.ratings}/5</p>
          </Modal.Body>
      </Modal>
    </ListGroup>
  );
}