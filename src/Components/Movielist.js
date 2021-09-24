import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Movielist = ({ mov }) => {
  return (
    <div style={{ display: "flex", marginTop: "100px" ,flexWrap:"wrap",marginLeft:"100px"}}>

      {mov.map((el) => (
          <Card style={{ width: "18rem", backgroundColor: "teal",marginLeft:"20px",marginBottom:"20px" }}>
            <Card.Img variant="top" style={{ height: "400px" }} src={el.imgs} />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              {el.years}
              <ReactStars count={5} size={24}onChange={null} edit={false} value={el.rating} />

            </Card.Body>
          </Card>
      ))}
      
    </div>
  );
};

export default Movielist;
