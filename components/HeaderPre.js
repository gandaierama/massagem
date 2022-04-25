import { Carousel, Button, Card, Navbar, Container, Form, FormControl, Nav, NavDropdown, Row, Col, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import React, {useState} from 'react'
import {FaUserAlt, FaShoppingCart} from "react-icons/fa";

const  HeaderPre=({handleShow, handleShow2, handleShow3})=> {


  return (
    <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img src="./logo.png" width="50" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Nav className="d-flex">
              <Button variant="dark" onClick={handleShow} style={{marginLeft:20}}>Contato</Button>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default HeaderPre