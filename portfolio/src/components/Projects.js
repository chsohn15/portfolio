import React from 'react'
import ProjectCard from './ProjectCard'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const Projects = (props) => {
  const Header = props.Header
    return (
      <Container style={{marginTop: '100px'}}>
        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
          <SectionHeader Header={props.Header} title={"Projects"}/>
        </Row>
        <Row style={{marginLeft: '30px', marginTop: '100px', marginRight: '30px'}}>
        <Col>
          <Card>
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
      </Container>
            
    )
}

export default Projects