import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import {FooterPre, Cadastro, ControlledCarousel, HeaderPre, Carrinho, Login } from '../components'
import { Tab, Carousel, Button, Card, Navbar, Container, Form, FormControl, Nav, NavDropdown, Row, Col, Dropdown, DropdownButton, Modal} from 'react-bootstrap';
import {FaUserAlt, FaShoppingCart, FaInstagram} from "react-icons/fa";
import { Player } from 'video-react';


import img from '../assets/image1.jpeg';

const HeadPrecode =()=>{
  return(
    <Head>
      <title>Clube de Mano Black de Massagem</title>
      <meta name="description" content="Massagem relaxante" />
      <link rel="icon" href="/logo.jpeg" />

    </Head>
  );
}




const Listagem =({info, add})=>{
  return (
    <Container>

      <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link bg="dark" eventKey="one">Relaxante</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  bg="dark" eventKey="two">Erótica</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  bg="dark" eventKey="tree">Sensual</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  bg="dark" eventKey="four">Tântrica</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  bg="dark" eventKey="five">Sensitive</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="one">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="two">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="tree">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  
                </Tab.Pane>
                <Tab.Pane eventKey="five">
                  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
      <Row>



          <Col key={1}>
          <Card className="mb-3 p-3" style={{ width: '18rem' }} >
            <Card.Img variant="top"    src="./foto1.jpeg" />
            <Card.Body>
              <Card.Title>João</Card.Title>
         
              <Button variant="dark">+ info</Button>
              <Button variant="dark" style={{marginLeft:20}}>Contato <FaShoppingCart/></Button>
            </Card.Body>
          </Card>
          </Col>

          <Col key={2}>
          <Card className="mb-3 p-3" style={{ width: '18rem' }} >
            <Card.Img variant="top"    src="./foto2.jpeg" />
            <Card.Body>
              <Card.Title>João</Card.Title>
         
              <Button variant="dark">+ info</Button>
              <Button variant="dark" style={{marginLeft:20}}>Contato <FaShoppingCart/></Button>
            </Card.Body>
          </Card>
          </Col>

          <Col key={3}>
          <Card className="mb-3 p-3" style={{ width: '18rem' }} >
            <Card.Img variant="top"    src="./foto3.jpeg" />
            <Card.Body>
              <Card.Title>João</Card.Title>
         
              <Button variant="dark">+ info</Button>
              <Button variant="dark" style={{marginLeft:20}}>Contato <FaShoppingCart/></Button>
            </Card.Body>
          </Card>
          </Col>

          <Col key={4}>
          <Card className="mb-3 p-3" style={{ width: '18rem' }} >
            <Card.Img variant="top"    src="./foto4.jpeg" />
            <Card.Body>
              <Card.Title>João</Card.Title>
         
              <Button variant="dark">+ info</Button>
              <Button variant="dark" style={{marginLeft:20}}>Contato <FaShoppingCart/></Button>
            </Card.Body>
          </Card>
          </Col>

          <Col key={5}>
          <Card className="mb-3 p-3" style={{ width: '18rem' }} >
            <Card.Img variant="top"    src="./foto5.jpeg" />
            <Card.Body>
              <Card.Title>João</Card.Title>
         
              <Button variant="dark">+ info</Button>
              <Button variant="dark" style={{marginLeft:20}}>Contato <FaShoppingCart/></Button>
            </Card.Body>
          </Card>
          </Col>


          
   
        </Row>
        <Row>
        <Col>
          <Player style={{ width: '100%' }}>
            <source src="./video.mp4" />
          </Player>
        </Col>
        </Row>
      </Container>
  );
}
export default function Home(props) {

  let info =props.data.data;

  const [carr, setCarr] = useState({
    itens: [],
    total: 0
  });

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);

  const add =(ad)=>{
    console.log(ad);


    carr.itens.push({id: ad.item.id, qtd: 1, value: ad.item.attributes.price});



    console.log(carr);
  }

 

  return (
    <div >
      <HeadPrecode/>
      <HeaderPre handleShow={handleShow} handleShow2={handleShow2} handleShow3={handleShow3}   />
      

      <main className={styles.main}>
        <Cadastro show={show} setShow={setShow}/>
        <ControlledCarousel info={info}/>
        <Listagem info={info} add={add} />
      </main>

      <FooterPre />


      
      <Login show2={show2} setShow2={setShow2}/>
      <Carrinho show3={show3} setShow3={setShow3} carr={carr}/>

    </div>
  )
}



export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://sheltered-meadow-49957.herokuapp.com/api/products`)
  const data = {};

  // Pass data to the page via props
  return { props: { data } }
}
