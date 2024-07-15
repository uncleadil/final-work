import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProductModal = ({ title, description, imageUrl, price }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        style={{ backgroundColor: "green", padding: "2.5px" }}
        variant="primary"
        onClick={handleShow}
      >
        Подробнее
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ width: "100%", height: "auto" }}
            src={imageUrl}
            alt={title}
          />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <h3>{price}</h3>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductModal;
