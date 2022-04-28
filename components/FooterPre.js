import { Button, Card, Navbar, Container, Nav, NavDropdown, Row, Col, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import {FaInstagram} from "react-icons/fa";

const  FooterPre=()=> {


  return (

    <Navbar  bg="dark" style={{backgroundColor:'#000'}}>
    <Container>
      <Col md={6}>
        Travessa dos Arquitetos 5, Bela Vista - Centro SP
      </Col>
      <Col md={6}>
        <a href="https://www.instagram.com/clubemanoblack/"><Button variant="dark" onClick={handleShow} style={{marginLeft:20}}><FaInstagram/></Button></a>
      </Col>
    </Container>
  </Navbar>
);
}

export default FooterPre