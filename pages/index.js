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




const Listagem =()=>{
  return (
    <Container>


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
        <Alert variant="dark">
  <Alert.Heading>Especialidades </Alert.Heading>
  <p>
   MASSAGEM RELAXANTE
"Trata-se de manobras especializadas empregadas no músculo,"
"conferindo ao indivíduo um pleno relaxamento e gerando inúmeros benefícios para o organismo como um todo, tanto ao corpo quanto à mente."
  </p>
  <hr />
  <p className="mb-0">
MASSAGEM ERÓTICA
"Estimula e desperta diversas partes íntimas do corpo, sendo essencial"
para expressar sentimentos e conecta-se com a outra pessoa trocando assim energias deliciosas e inesquecíveis.
  </p>
  <hr />
  <p className="mb-0">
MASSAGEM SENSUAL
"Ajuda aumentar a intimidade, desejo e estimula a comunicação e"
sensibiliza o corpo que passa a desfrutar de mais sensações gostosas.
  </p>
  <hr />
  <p className="mb-0">
MASSAGEM SENSITIVE
É feita apenas com às pontas dos dedos percorrendo lentamente cada
"zona érogena, para sentir os pelos, os poros arrepiados despertando incrível e deliciosa sensação de bem-esta e prazer."
  </p>
  <hr />
  <p className="mb-0">
MASSAGEM TÂNTRICA
"Expande os limites do autoconhecimento, onde estimulam a libido"
encontrando pontos excitantes para proporcionar momentos intensos de prazer.
  </p>
  <hr />
  <p className="mb-0">
BENIFÍCIOS À SAÚDE PROPORCIONADO PELAS MASSAGENS:
- Redução da ansiedade
- Alívio do estresse
- Melhora a concentração
- Ajuda no apetite
- Combate a insônia
- Combate a depressão
- Ajuda na circulação sanguínea
- Estimula o sistema linfático
- Diminui a tensão
- Alivia a dor muscular
  </p>

</Alert>
      </Row>
      </Container>
  );
}
export default function Home(props) {



  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);



  return (
    <div >
      <HeadPrecode/>
      <HeaderPre handleShow={handleShow} handleShow2={handleShow2} handleShow3={handleShow3}   />
      

      <main className={styles.main}>
        <Cadastro show={show} setShow={setShow}/>
        <ControlledCarousel />
        <Listagem  />
      </main>

      <FooterPre />


      
      <Login show2={show2} setShow2={setShow2}/>

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
