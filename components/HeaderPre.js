import { Carousel, Button, Card, Navbar, Container, Form, FormControl, Nav, NavDropdown, Row, Col, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import React, {useState} from 'react'
import {FaUserAlt, FaShoppingCart, FaInstagram, FaWhatsapp} from "react-icons/fa";

const  HeaderPre=({handleShow, handleShow2, handleShow3})=> {


  return (
    <Navbar expand="lg" style={{backgroundColor:'#000', borderBottom: '2px dashed #ddd'}}>
        <Container >
          <Navbar.Brand href="#"><img src="./logo.jpeg" width="130" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav className="d-flex">
              <Button variant="dark" onClick={handleShow} style={{marginLeft:20}}>11 97079-6948</Button>
              <Button variant="dark" onClick={handleShow} style={{marginLeft:20}}>Contato</Button>
               <a href="https://www.instagram.com/clubemanoblack/"><Button variant="dark" onClick={handleShow} style={{marginLeft:20}}><FaInstagram/></Button></a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default HeaderPre