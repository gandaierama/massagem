import { Button, Card, Navbar, Container, Nav, NavDropdown, Row, Col, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import {FaInstagram} from "react-icons/fa";

const  FooterPre=()=> {


  return (

    <Navbar  bg="dark" style={{backgroundColor:'#000'}}>
    <Container>
      <Col sm={6}>
        Travessa dos Arquitetos 5, Bela Vista - Centro SP
      </Col>
      <Col sm={6}>
        <a href="https://www.instagram.com/clubemanoblack/"><FaInstagram/></a>
      </Col>
    </Container>
  </Navbar>
);
}

export default FooterPre