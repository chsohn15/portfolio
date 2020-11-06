import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionHeader from './SectionHeader'

const Blogs = (props) => {
  const Header = props.Header

    return (
      <Container style={{marginTop: '75px'}}>
      <Row style={{marginLeft: '0px', marginRight: '0px'}}>
        <SectionHeader Header={props.Header} title={"Blog Posts"}/>
      </Row>
        <Row style={{marginLeft: '30px', marginTop: '10px', marginRight: '30px'}}>
        <Col>
          <Card>
            <Row >
                <Card.Body>
                  <Card.Text>
                  Blogs
                </Card.Text>
                </Card.Body>
            
            </Row>
          </Card>
        </Col>
      </Row>
      </Container>
    )
}

export default Blogs