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
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Col>
  </Row>
  </Card>
  </Container>

            
    )
}

export default ProjectCard