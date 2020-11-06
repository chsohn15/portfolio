import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import ReactPlayer from "react-player"

const ProjectCard = () => {
return (
<Container >
  <Card>
    <Row>
        <Col>
      <div style={{width: '100%'}}>
    <ReactPlayer 
        url="https://youtu.be/GHGlrOopo3M"
      />
      </div>
      </Col>
      <Col>
    <Card.Body>
      <Card.Title>BookQuest</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Col>
  </Row>
  </Card>

  <Card style={{marginTop: "60px"}}>
    <Row>
      <Col>
    <Card.Body>
      <Card.Title>The Harry Potter Writing App</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Col>
    <Col>
      <div style={{width: '100%'}}>
    <ReactPlayer 
        url="https://youtu.be/IDtMxssicik"
      />
      </div>
      </Col>
  </Row>
  </Card>

  <Card style={{marginTop: "60px"}}>
    <Row>
        <Col>
      <div style={{width: '100%'}}>
    <ReactPlayer 
        url="https://youtu.be/Bf8jipkXKlU"
      />
      </div>
      </Col>
      <Col>
    <Card.Body>
      <Card.Title>{"K & C Art Gallery"}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    </Col>
  </Row>
  </Card>
  </Container>

            
    )
}

export default ProjectCard