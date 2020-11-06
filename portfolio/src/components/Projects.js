import React from 'react'
import ProjectCard from './ProjectCard'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Projects = () => {
    return (
        <Row style={{marginLeft: '30px', marginTop: '50px'}}>
        <Col>
          <Card>
            <Card.Header>Projects</Card.Header>
            <Row >

                <Card.Body>
                  <Card.Text>
                  <ProjectCard />
                </Card.Text>
                </Card.Body>
            
            </Row>
          </Card>
        </Col>
      </Row>
            
    )
}

export default Projects