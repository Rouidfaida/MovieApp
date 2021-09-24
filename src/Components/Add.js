import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { GrAddCircle } from "react-icons/gr";

const Add = ({ add }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const [years, setYears] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    add(image, name, rating, years);
    setImage("");
    setName("");
    setRating("");
    setYears("");
  };
  let handelRating = (x) => {
    setRating(x);
  };

  return (
    <div>
      <GrAddCircle
        style={{
          backgroundColor: "teal",
          fontSize: "60px",
          marginLeft: "700px",
        }}
        variant="primary"
        onClick={handleShow}
      ></GrAddCircle>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add new Movies</Modal.Title>
        </Modal.Header>
        <Form
          style={{ marginLeft: "10px", marginTop: "10px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              name
            </Form.Label>
            <Col sm="10">
              <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              image
            </Form.Label>
            <Col sm="10">
              <input
                type="url"
                value={image}
                placeholder="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              years
            </Form.Label>
            <Col sm="10">
              <input
                type="date"
                value={years}
                placeholder="years"
                onChange={(e) => setYears(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              rating
            </Form.Label>
            <Col sm="10">
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                onChange={handelRating}
                value={rating}
                activeColor="#ffd700"
              />
              ,{" "}
            </Col>
          </Form.Group>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
