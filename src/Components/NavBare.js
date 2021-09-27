import React from "react";
import {  FormControl, Nav, Navbar } from "react-bootstrap";
import { MdSearch, MdMic } from "react-icons/md";
import ReactStars from "react-rating-stars-component";

const NavBare = ({ handelChange, text, ratingChanged, rat }) => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "black", width: "100%" }}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <h2
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "40px",
              color: " rgb(255, 0, 0)",
            }}
          >
            NETFLIX
          </h2>
          <div
            style={{
              backgroundColor: "white",
              marginTop: "10px",
              width: "400px",
              marginLeft: "300px",
              display: "flex",
            }}
          >
            <FormControl
              type="search"
              className="mr-2"
              placeholder="Rechercher"
              value={text}
              onChange={handelChange}
            />

            <MdSearch
              style={{
                width: "26px",
                height: "26px",
                marginTop: "5px",
                marginLeft: "15px",
              }}
            />
          </div>

          <div style={{ marginTop: "20px", marginLeft: "150px" }}>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              // activeColor="#ffd700"
            />
            ,
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBare;
