import { Carousel, Button,  Container,  Row, Col} from 'react-bootstrap';
import React, {useState} from 'react'

const  ControlledCarousel=({info})=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="d-none d-md-block" style={{ width:'100%', padding:30, backgroundColor:'#000', marginBottom:30}}>


      <Carousel.Item key={1} style={{ width:'100%', backgroundColor:'#000'}}>
      <Container fluid className="w-100 ">
      <Row >
      <Col md={5}>

      <div className="justify-content-center">
        <img
          className="d-block mx-auto"
          style={{ height:400}}
          src="./image2.png"
          alt="First slide"
        />
      </div>
       </Col>
       <Col md={5} style={{ color:'#fff', textAlign:'center', flex:1}}>
   
          <h1>Clube da Massagem</h1>
          <h4>Agende já sua massagem conosco.</h4>
        
        </Col>
      </Row>
      </Container>
      </Carousel.Item>

      
    </Carousel>
  );
}

export default ControlledCarousel